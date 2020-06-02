import StringMetric from "../src/utils/StringMetric";

let sm: StringMetric;

beforeAll(() => {
  sm = new StringMetric();
});

test('Test base case', () => {
  expect(sm.levenshtein('hello', 'hello')).toEqual(0);
  expect(sm.levenshtein('hello', 'hel lo')).toEqual(1);
});

test('Test empty string', () => {
  expect(sm.levenshtein('', '')).toEqual(0);
  expect(sm.levenshtein('hello', '')).toEqual(5);
});

test('Test case insensitive option', () => {
  const opts = { caseSensitive: true }
  expect(sm.levenshtein('HeLlo', 'heLlO', opts)).toEqual(2);
});

test('Test search substring', () => {
  const opts = { searchSubstr: true }
  expect(sm.levenshtein('hello world', 'flow', opts)).toEqual(2);
  expect(sm.levenshtein('hello world', 'lowor', opts)).toEqual(1);
  expect(sm.levenshtein('bro', 'he11o w0r!d', opts)).toEqual(2);
  expect(sm.levenshtein('hello', 'jello', opts)).toEqual(1);
  expect(sm.levenshtein('ello', 'jello', opts)).toEqual(0);
});

test('Test search substring in A', () => {
  const opts = { searchSubstrInAOnly: true }
  expect(sm.levenshtein('hello world', 'flow', opts)).toEqual(2);
  expect(sm.levenshtein('hello world', 'lowor', opts)).toEqual(1);
  expect(sm.levenshtein('bro', 'he11o w0r!d', opts)).toEqual(10);
  expect(sm.levenshtein('hello', 'jello', opts)).toEqual(1);
  expect(sm.levenshtein('ello', 'jello', opts)).toEqual(1);
});
