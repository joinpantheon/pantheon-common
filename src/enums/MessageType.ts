enum MessageType {
  // deprecated, but need definition for ts
  Chat_DEPR = "CHAT",
  Notification_DEPR = "NOTIFICATION",
  QuestionReport_DEPR = "QUESTION_REPORT",
  RightAnswer_DEPR = "RIGHT_ANSWER",
  WrongAnswer_DEPR = "WRONG_ANSWER",
  
  Chat            = "Chat",
  CorrectAnswer   = "Correct Answer",
  IncorrectAnswer = "Incorrect Answer",
  Notification    = "Notification",
  QuestionReport  = "Question Report"
}

export default MessageType