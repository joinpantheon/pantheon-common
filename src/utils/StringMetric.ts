export default class StringMetric {
  charCoordMap: CharCoordMap;

  constructor() {
    this.charCoordMap = new CharCoordMap();
  }

  /**
   * Wagner–Fischer implementation of the Damerau-Levenshtein algorithm which 
   * is used to find min edit distance between two given strings. Tweaked to 
   * also find edit distance between shorter input and substring of longer 
   * input of same length (https://stackoverflow.com/a/37804497/5171218).
   * @param a 
   * @param b 
   */
  public levenstein(a: string, b: string, customCost: boolean=false, 
      substr: boolean=false, damerau: boolean=true): number {
    if (a.length === 0) return b.length; 
    if (b.length === 0) return a.length; 
    if (a.length > b.length) [a, b] = [b, a];

    // Increment along top and left edges of matrix
    const memo: number[][] = [];
    for (let i = 0; i <= a.length; i++) memo[i] = [i];
    for (let j = 0; j <= b.length; j++) memo[0][j] = (substr ? 0 : j);

    // Fill in the rest of the matrix
    let cost: number;
    for (let i = 1; i <= a.length; i++){
      for (let j = 1; j <= b.length; j++){
        // Calculate edit cost and determine cheapest edit action
        cost = customCost ? this.editCost(a.charAt(i-1), b.charAt(j-1)) : 1; 
        memo[i][j] = Math.min(
          memo[i][j-1] + 1,      // Insertion
          memo[i-1][j] + 1,      // Deletion
          memo[i-1][j-1] + cost  // Substitution or same character
        );

        // Transposition
        if (!damerau) continue;
        cost = customCost ? 0.4 : 1;
        if (i > 1 && j > 1 && a[i-1] === b[j-2] && a[i-2] === b[i-1]) {
          memo[i][j] = Math.min(memo[i][j], memo[i-2][j-2] + cost);
        }
      }
    }

    return substr 
      ? Math.min(...memo[a.length].slice(a.length)) 
      : memo[a.length][b.length];
  }

  /**
   * Calculate cost between two given characters. This method takes into account
   * proximity of these characters on a QWERTY keyboard. Although this is
   * case insensitive, we do not forgive 1 -> !.
   * @param a Single char to compare
   * @param b Single char to compare
   */
  private editCost(a: string, b: string): number {
    if (a.length > 1 || b.length > 1) return this.levenstein(a, b);
    a = a.toLowerCase();
    b = b.toLowerCase();

    // Same character => no cost
    if (a === b) return 0;

    // If characters are numbers, it is a more serious mistake than letters
    if (/\d/.test(a) && /\d/.test(b)) return 1.25;

    // Get positions of inputs. If we don't recognize either, return full cost
    const aCoord: Point = this.charCoordMap.getKeyboardCoord(a);
    const bCoord: Point = this.charCoordMap.getKeyboardCoord(b);
    if (aCoord.x < 0 || bCoord.x < 0) return 1;

    // Use positional difference between given keystrokes to calculate cost
    const dx = Math.abs(aCoord.x - bCoord.x);
    const dy = Math.abs(aCoord.y - bCoord.y);
    if (dx > 1 || dy > 1) return 1;    // Distant
    else if (dy === 0)    return 0.5;  // Horizontally adjacent
    else                  return 0.75; // Vertically or diagonally adjacent
  }
}

/**
 * This class translates common characters on a keyboard to coordinates on a
 * superimposed Cartesian plane. Assumes QWERTY keyboard layout.
 */
class CharCoordMap {
  private charToCoord: Map<string, Point>;

  constructor() {
    this.charToCoord = this.createCharCoordMap();
  }

  /**
   * Convert given character to coordinate on a Cartesian plane superimposed
   * onto a QWERTY keyboard, where 1 is (0,0) and / is (9, 3).
   * @param char Single char to position of
   */
  public getKeyboardCoord(char: string): Point {
    if (!this.charToCoord.has(char)) return new Point(-1, -1);
    else return this.charToCoord.get(char) as Point;
  }

  /**
   * Create map to quickly lookup coordinates of relevant letters.
   * TODO: add DVORAK support
   */
  private createCharCoordMap(): Map<string, Point> {
    const qwertyGrid: string[][] = [
      '1234567890-='.split(''),
      'qwertyuiop[]\\'.split(''),
      'asdfghjkl;\''.split(''),
      'zxcvbnm,./'.split('')
    ];
    
    const qwertyMap: Map<string, Point> = new Map<string, Point>();
    for (let i = 0; i < qwertyGrid.length; i++) {
      for (let j = 0; j < qwertyGrid[i].length; j++) {
        qwertyMap.set(qwertyGrid[i][j], new Point(j, i));
      }
    }

    return qwertyMap;
  }
}

/**
 * Simple class denoting a point in a Cartesian plane.
 */
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
