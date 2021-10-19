import { RECIEVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from "../actions/questions";

export default function users(state = {}, action){
    switch(action.type){
        case RECIEVE_QUESTIONS: 
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION: 
            //todo add ANSWER_QUESTION reducer
            return
            
        case ADD_QUESTION: 
            //todo add ADD_QUESTION reducer
            return

        default:
            return state
    }
}