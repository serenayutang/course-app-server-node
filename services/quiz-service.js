// const quizzes = require('./quizzes.json')
// const quizzesModel = require("../db/quizzes/quizzes-model")
const quizzesDao = require('../daos/quizzes-dao');

const findAllQuizzes = () => {
    // return quizzes
    // return quizzesModel.find()
    return quizzesDao.findAllQuizzes();
}

const findQuizById = (quizId) => {
    // return quizzes.find((quiz) => {
    //     return quiz._id === quizId
    // })
    // return quizzesModel.findById(quizId).populate("questions").exec()
    return quizzesDao.findQuizById(quizId);
}

// const QUIZZES_URL = 'http://localhost:3000/api/quizzes';
// const findAllQuizzes = () => {
//     return fetch(QUIZZES_URL)
//         .then(response => response.json())
// }
// const findQuizById = (qid) => {
//     return fetch(`${QUIZZES_URL}/${qid}`)
//         .then(response => response.json())
// }
// export default {
//     findAllQuizzes, findQuizById
// }

module.exports = {
    findAllQuizzes,
    findQuizById
}
