export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function recieveQuestions(questions) {
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

//todo: Add addQuestion handler to handle async request

export function answerQuestion(id, authedUser) {
    return {
        type: ANSWER_QUESTION,
        id,
        authedUser
    }
}

//todo: Add answerQuestion handler to handle async request