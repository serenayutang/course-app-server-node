// const questions = require('./question.json')
// const questionsModel = require("../db/questions/questions-model")
const questionsDao = require('../daos/questions-daos')

const findAllQuestions = () => {
    // return questions
    // return questionsModel.find()
    return questionsDao.findAllQuestions();
}

const findQuestionsForQuiz = (quizId) => {
    // questions.filter(question => question.quizId === quizId)
    // return questions.filter((question) => {return question.quizId === qzid;})
    return questionsDao.findQuestionsForQuiz(quizId);
}

const findQuestionById = (questionId) => {
    // return questions.find((question) => {
    //     return question._id === quid;
    // })
    // return questionsModel.findById(quid)
    return questionsDao.findQuestionsById(questionId);
}

// const QUIZZES_URL = 'http://localhost:3000/api/quizzes';
// const findQuestionsForQuiz = (qid) => {
//     return fetch(`${QUIZZES_URL}/${qid}/questions`)
//         .then(response => response.json())
// }
// export default {
//     findQuestionsForQuiz
// }

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById
}
