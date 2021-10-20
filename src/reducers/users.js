import { RECIEVE_USERS, ADD_USER_QUESTION, ADD_USER_ANSWER } from "../actions/users";

export default function users(state= {}, action){
    switch(action.type){
        case RECIEVE_USERS: 
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    "questions": state[action.question.author].questions.concat([action.question.id])
                }
            }
        case ADD_USER_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    "answers": {
                        ...state[action.authedUser].answers,
                        [action.question.id]: action.answer
                    }
                }
            } 
        default:
            return state
    }
}