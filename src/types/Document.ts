import Chat from "../collections/Chat";
import Friendship from "../collections/Friendship";
import Game from "../collections/Game";
import GameQuestionAnswer from "../collections/GameQuestionAnswer";
import Match from "../collections/Match";
import Message from "../collections/Message";
import Notification from "../collections/Notification";
import QuestionAnswer from "../collections/QuestionAnswer";
import QuestionReport from "../collections/QuestionReport";
import Stats from "../collections/Stats";
import Status from "../collections/Status";
import User from "../collections/User";
import UserPrivate from "../collections/UserPrivate";
import UserReport from "../collections/UserReport";

type Document = Chat | Friendship | Game | GameQuestionAnswer | Match | 
  Message | Notification | QuestionAnswer | Stats | Status | QuestionReport | 
  User | UserPrivate | UserReport;

export default Document;