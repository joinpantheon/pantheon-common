import Chat from "../collections/Chat";
import Friendship from "../collections/Friendship";
import Game from "../collections/Game";
import GameQuestionAnswer from "../collections/GameQuestionAnswer";
import QuestionReport from "../collections/QuestionReport";
import User from "../collections/User";
import UserPrivate from "../collections/UserPrivate";
import UserReport from "../collections/UserReport";
import Answer from "../deprecated/Answer";
import Question from "../deprecated/Question";
import QuestionResponse from "../deprecated/QuestionResponse";

type Document = Answer | Chat | Friendship | Game | GameQuestionAnswer | Question |
  QuestionReport | QuestionResponse | User | UserPrivate | UserReport;

export default Document;