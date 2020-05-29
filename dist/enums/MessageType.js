"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageType;
(function (MessageType) {
    // deprecated, but need definition for ts
    MessageType["Chat_DEPR"] = "CHAT";
    MessageType["WrongAnswer_DEPR"] = "WRONG_ANSWER";
    MessageType["RightAnswer_DEPR"] = "RIGHT_ANSWER";
    MessageType["Notification_DEPR"] = "NOTIFICATION";
    MessageType["QuestionReport_DEPR"] = "QUESTION_REPORT";
    MessageType["Chat"] = "Chat";
    MessageType["IncorrectAnswer"] = "Incorrect Answer";
    MessageType["CorrectAnswer"] = "Correct Answer";
    MessageType["Notification"] = "Notification";
    MessageType["QuestionReport"] = "Question Report";
})(MessageType || (MessageType = {}));
exports.default = MessageType;
