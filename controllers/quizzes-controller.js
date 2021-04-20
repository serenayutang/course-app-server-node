module.exports = (app) => {
    const quizService = require('../services/quiz-service')

    const findAllQuizzes = (req, res) => {
        // const quizzes = quizService.findAllQuizzes()
        // res.send(quizzes)
        // res.send(quizService.findAllQuizzes())
        quizService.findAllQuizzes().then((quizzes) => {res.send(quizzes)})
    }

    const findQuizById = (req, res) => {
        const quizId = req.params['quizId']
        // const quiz = quizService.findQuizById(quizId)
        // res.send(quiz)
        quizService.findQuizById(quizId).then((quiz) => {res.send(quiz)})
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)
}

