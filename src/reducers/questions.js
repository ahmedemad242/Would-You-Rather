import { RECIEVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from "../actions/questions";

export default function questions(state = {}, action){
    switch(action.type){
        case RECIEVE_QUESTIONS: 
            return {
                ...state,
                ...action.questions,
            }
        case ANSWER_QUESTION: 
            if(action.answer === "optionOne")
                return {
                    ...state,
                    [action.question.id]: {
                        ...action.question,
                        "optionOne": {
                            votes: action.question.optionOne.votes.concat([action.authedUser]),
                            text: action.question.optionOne.text,
                        }
                    }
                }
            else
                return {
                    ...state,
                    [action.question.id]: {
                        ...action.question,
                        "optionTwo": {
                            votes: action.question.optionTwo.votes.concat([action.authedUser]),
                            text: action.question.optionTwo.text,
                        }
                    }
                }
            
        case ADD_QUESTION: 
            return {
                ...state,
                [action.question.id]: action.question,
            }

        default:
            return state
    }
}