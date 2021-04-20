module.exports = (app) => {
    const questionService = require("../services/questions-service");

    const findAllQuestions = (req, res) => {
        // const questions = questionService.findAllQuestions()
        // res.send(questions)
        questionService.findAllQuestions()
            .then(questions => res.send(questions))
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['quizId']
        // const questions = questionService.findQuestionsForQuiz(quizId)
        // res.json(questions)
        questionService.findQuestionsForQuiz(quizId)
            .then(quiz => res.send(quiz.questions))
    }

    const findQuestionById = (req, res) => {
        const questionId = req.params['questionId']
        // res.send(questionService.findQuestionById(req.params.quizId));
        questionService.findQuestionById(questionId)
            .then(question => res.send(question))
    }

    app.get('/api/questions', findAllQuestions);
    app.get('/api/quizzes/:quizId/questions', findQuestionsForQuiz);
    app.get('/api/quizzes/:quizId', findQuestionById);
}
