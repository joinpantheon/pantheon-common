enum QuestionError {
  MALFORMED_MC_CHOICE, // Doubled up choices in MC question
  DOUBLED_QUESTION, // Doubled up questions in same document
  MC_ANSWER_MISFORMATTED, // MC answer doesn't start with [w-z])
  SHORT_ANSWER_NOT_SHORT, // Question requiring 1 sentence+ answer
}

export default QuestionError;