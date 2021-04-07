let questions = require('./question.json')

const findAllQuestions = () => {
    return questions
}

const findQuestionsForQuiz = (qzid) => {
    // questions.filter(question => question.quizId === quizId)
    return questions.filter((question) => {
        return question.quizId === qzid;
    })
}

const findQuestionById = (qid) => {
    return questions.find((question) => {
        return question._id === qid;
    })
}

// const QUIZZES_URL = 'http://localhost:3000/api/quizzes';
// const findQuestionsForQuiz = (qid) => {
//     return fetch(`${QUIZZES_URL}/${qid}/questions`)
//         .then(response => response.json())
// }
// export default {
//     findQuestionsForQuiz
// }

const createQuestion = () => {}
const createQuestionForQuiz = () => {}


const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    findQuestionsForQuiz,
    createQuestion,
    createQuestionForQuiz,
    findAllQuestions,
    findQuestionById,
    updateQuestion,
    deleteQuestion
}