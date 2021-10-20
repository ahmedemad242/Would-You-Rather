import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { recieveQuestions, addQuestion, answerQuestion } from './questions'
import { recieveUsers, addUserQuestion, addUserAnswer } from './users'
import { setAuthedUser  } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'


const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({ users, questions }) => {
            dispatch(recieveUsers(users))
            dispatch(recieveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}


export function handleAnswerQuestion({ answer, question }) {
    
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())
        return saveQuestionAnswer({
            authedUser: authedUser,
            qid: question.id,
            answer: answer
        })
        .then(()=>{
            dispatch(answerQuestion(question, authedUser, answer))
            dispatch(addUserAnswer(question, authedUser, answer))
        })
        .then(() => dispatch(hideLoading()))
    }
}




export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())
        return saveQuestion({
            optionOneText: optionOneText,
            optionTwoText: optionTwoText,
            author: authedUser,
        })
        .then((question) => {
            dispatch(addQuestion(question))
            dispatch(addUserQuestion(question))
        })
        .then(() => dispatch(hideLoading()))
    }
}
