const questionsModel = require('../db/questions/questions-model')
const quizzesModel = require('../db/quizzes/quizzes-model')

const findAllQuestions = () => {
    const result = questionsModel.find();
    console.log('result', result);
    return result;
}

const findQuestionsById = (qid) => {
    return questionsModel.findById(qid);
}

const findQuestionsForQuiz = (qid) => {
    return quizzesModel.findById(qid).populate('questions').exec();
}

module.exports = {
    findAllQuestions,
    findQuestionsById,
    findQuestionsForQuiz,
}
