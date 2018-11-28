export function addQuestion(title, question, answer, decks) {
  const newQuestion = {
    question,
    answer,
  };
  const questions = [
    ...decks[title].questions,
    newQuestion
  ];
  const newDecks = {
    ...decks,
    [title]: {
      ...decks[title],
      questions,
    }
  };

  return newDecks;
}
