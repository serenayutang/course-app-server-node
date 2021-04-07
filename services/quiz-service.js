const quizzes = require('./quizzes.json')

//Node js
const findAllQuizzes = () => {
    return quizzes
}

const findQuizById = (quizId) => {
    return quizzes.find((quiz) => {
        return quiz._id === quizId
    })
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


// console.log(findAllQuizzes())
// console.log(findQuizById('123'))

//MongoDB
const createQuiz = () => {}

const updateQuiz = () => {}

const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz
}