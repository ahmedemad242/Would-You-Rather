import { getInitialData } from '../utils/api'
import { recieveQuestions } from './questions'
import { recieveUsers } from './users'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({ users, tweets }) => {
            dispatch(recieveUsers(users))
            dispatch(recieveQuestions(tweets))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}

