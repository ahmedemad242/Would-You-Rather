import React, { Component } from "react";
import { connect } from 'react-redux'
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";
import Login from './Login'

class Question extends Component{
    render() {
        const { authedUser, users, id } = this.props

        if(authedUser === null)
            return <Login redirectTo = {`/question/${id}`}/>


        if(!this.props.question)
            return <h1>404 NOT FOUND!</h1>
            
         

        const isAnswered = Object.keys(users[authedUser].answers).filter((qid)=> qid === id).length>0?true:false

        if(isAnswered){
            return (<AnsweredQuestion id = {id}/>) 
        }
        else{
            return (<UnansweredQuestion id = {id}/>) 
        }
    }
}

function mapStateToProps({ authedUser, users, questions }, props){
    const { id } = props.match.params
    const question = questions[id]
    const author = question ? users[question.author]: null

    return {
        authedUser,
        author,
        users,
        id,
        question: question 
    }
}

export default connect(mapStateToProps)(Question)