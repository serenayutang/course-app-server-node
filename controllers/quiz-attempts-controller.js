module.exports = app => {
    const quizAttemptsService = require('../services/quiz-attempts-service');

    const findAttemptsForQuiz = (req, res) => {
        quizAttemptsService.findAttemptsForQuiz(req.params.quizId)
            .then(attempts => res.send(attempts))
    }

    const createAttempt = (req, res) => {
        quizAttemptsService.createAttemptForQuiz(req.params.quizId, req.body.attempts, req.body.questions)
            .then(attempt => res.send(attempt))
    }

    app.get('/api/quizzes/:quizId/attempts', findAttemptsForQuiz);
    app.post('/api/quizzes/:quizId/attempts', createAttempt);
}
