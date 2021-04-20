const quizAttemptsDao = require('../daos/quiz-attempts-dao');

const findAttemptsForQuiz = (quizId) => {
    return quizAttemptsDao.findAttemptsForQuiz(quizId);
}

const createAttemptForQuiz = (quizId, attempts, questions) => {
    return quizAttemptsDao.createAttemptForQuiz(quizId, attempts, questions);
}

module.exports = {
    findAttemptsForQuiz,
    createAttemptForQuiz
}
