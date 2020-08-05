import Chat from '../collections/Chat';
import Friendship from '../collections/Friendship';
import Game from '../collections/Game';
import GameQuestionAnswer from '../collections/GameQuestionAnswer';
import Match from '../collections/Match';
import Notification from '../collections/Notification';
import QuestionAnswer from '../collections/QuestionAnswer';
import QuestionReport from '../collections/QuestionReport';
import Stats from '../collections/Stats';
import User from '../collections/User';
import UserPrivate from '../collections/UserPrivate';
import UserReport from '../collections/UserReport';
import CollectionName from '../enums/CollectionName';

/**
 * Union of all collection types.
 */
type AnyDocument = Chat | Friendship | Game | GameQuestionAnswer | Match | 
  Notification | QuestionAnswer | QuestionReport | Stats | User | 
  UserPrivate | UserReport;

/**
 * Generic type that represents collection object corresponding to given 
 * collection name. Ex: `Document<CollectionName.Games> = Game`.
 */  
type Document<T> = 
  T extends CollectionName.Chats               ? Chat               :
  T extends CollectionName.Friendships         ? Friendship         :
  T extends CollectionName.GameQuestionAnswers ? GameQuestionAnswer :
  T extends CollectionName.Games               ? Game               :
  T extends CollectionName.Matches             ? Match              :
  T extends CollectionName.Notifications       ? Notification       :
  T extends CollectionName.QuestionAnswers     ? QuestionAnswer     :
  T extends CollectionName.QuestionReports     ? QuestionReport     :
  T extends CollectionName.Stats               ? Stats              :
  T extends CollectionName.UserReports         ? UserReport         :
  T extends CollectionName.Users               ? User               : 
  T extends CollectionName.UsersPrivate        ? UserPrivate        :
  never;

export { Document as default, AnyDocument };

