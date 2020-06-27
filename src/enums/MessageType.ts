enum MessageType {
  // deprecated, but need definition for ts
  Chat_DEPR = "CHAT",
  WrongAnswer_DEPR = "WRONG_ANSWER",
  RightAnswer_DEPR = "RIGHT_ANSWER",
  Notification_DEPR = "NOTIFICATION",
  QuestionReport_DEPR = "QUESTION_REPORT",
  
  Chat            = "Chat",
  IncorrectAnswer = "Incorrect Answer",
  CorrectAnswer   = "Correct Answer",
  Notification    = "Notification",
  QuestionReport  = "Question Report"
}

export default MessageType