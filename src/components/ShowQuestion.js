import React, { Component } from "react";
import { connect } from 'react-redux'
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

class Question extends Component{
    render() {
        const { authedUser, users, id } = this.props 

        const isAnswered = Object.keys(users[authedUser].answers).filter((qid)=> qid === id).length>0?true:false
        console.log(id)
        console.log(Object.keys(users[authedUser].answers).filter((qid)=> qid === id))

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
    const author = users[question.author]

    return {
        authedUser,
        author,
        users,
        id,
        question: question 
    }
}

export default connect(mapStateToProps)(Question)