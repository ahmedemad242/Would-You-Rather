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

export function answerQuestion(question, authedUser, answer) {
    return {
        type: ANSWER_QUESTION,
        question,
        authedUser,
        answer,
    }
}

