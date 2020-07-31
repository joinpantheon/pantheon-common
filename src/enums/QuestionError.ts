enum QuestionError {
  // Doubled up choices in MC question
  MalformedMcChoices = 'Malformed MC choices',
  // Doubled up questions in same document
  DoubledQuestion = 'Doubled question',
  // MC answer doesn't start with [w-z])
  McAnswerMisformatted = 'MC answer misformatted',
  // Question requiring 1+ sentence answer
  ShortAnswerNotShort = 'Short answer not short',
}

export default QuestionError;