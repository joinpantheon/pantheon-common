import Answer from "../collections/Answer";
import Chat from "../collections/Chat";
import Friendship from "../collections/Friendship";
import Game from "../collections/Game";
import GameQuestion from "../collections/GameQuestion";
import Question from "../collections/Question";
import QuestionReport from "../collections/QuestionReport";
import QuestionResponse from "../collections/QuestionResponse";
import User from "../collections/User";
import UserPrivate from "../collections/UserPrivate";
import UserReport from "../collections/UserReport";

type Document = Answer | Chat | Friendship | Game | GameQuestion | Question |
  QuestionReport | QuestionResponse | User | UserPrivate | UserReport;

export default Document;