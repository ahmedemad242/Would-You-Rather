import React, { Component } from "react";
import { connect } from 'react-redux'
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

class Question extends Component{
    render() {
        const { authedUser, author, users, question, id } = this.props 

        const isAnswered = Object.keys(users[authedUser].answers).filter((qid)=> qid === id).length>0?true:false

        if(isAnswered){
            return (<AnsweredQuestion id = {id}/>) 
        }
        else{
            return (<UnansweredQuestion id = {id}/>) 
        }
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }){
    const question = questions[id]
    const author = question ? users[question.author] : null

    return {
        authedUser,
        author,
        users,
        question: question 
    }
}

export default connect(mapStateToProps)(Question)