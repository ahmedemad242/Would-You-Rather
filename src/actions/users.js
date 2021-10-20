export const RECIEVE_USERS = 'RECIEVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';


export function recieveUsers(users) {
    return {
        type: RECIEVE_USERS,
        users
    }
}

export function addUserQuestion(question) {
    return {
        type: ADD_USER_QUESTION,
        question,
    }
}

export function addUserAnswer(question, authedUser, answer) {
    return {
        type: ADD_USER_ANSWER,
        question,
        authedUser,
        answer
    }
}