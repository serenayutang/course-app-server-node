// const questions = require('./question.json')
const questionsModel = require("../db/questions/questions-model")

const findAllQuestions = () => {
    // return questions
    return questionsModel.find()
}

const findQuestionsForQuiz = (quizId) => {
    // questions.filter(question => question.quizId === quizId)
    // return questions.filter((question) => {return question.quizId === qzid;})
    return questionsModel.find({quizId: quizId})
}

const findQuestionById = (quid) => {
    // return questions.find((question) => {
    //     return question._id === quid;
    // })
    return questionsModel.findById(quid)
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
