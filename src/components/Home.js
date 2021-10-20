import React, { Component } from "react";
import Question from './Question'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

class Home extends Component{
    state = {
        isAnswered: true,
    }

    onToggle(event){
        this.setState(()=>({
            isAnswered: event === "answered"? true : false
        }))
    }
    render() {
        const { answeredQuestionsIds, unansweredQuestionsIds } = this.props
        console.log(answeredQuestionsIds, unansweredQuestionsIds )

        

        return (
            <Container>
                <Tabs defaultActiveKey="answered" id="answered-or-unanswered" className="mb-3" onSelect={(e)=>this.onToggle(e)}>
                    <Tab eventKey="answered" title="Answered Questions">
                    </Tab>
                    <Tab eventKey="unanswered" title="Unanswered Questions">
                    </Tab>
                </Tabs>

                    {this.state.isAnswered
                    ? (
                        <ul className="dashboard-list">
                            {answeredQuestionsIds.map((id)=>(
                                <li key={id}>
                                    <Question id = {id}/>
                                </li>
                            ))}
                        </ul>
                      )
                    : (
                        <ul className="dashboard-list">
                            {unansweredQuestionsIds.map((id)=>(
                                <li key={id}>
                                    <Question id = {id}/>
                                </li>
                            ))}
                        </ul>
                      )
                    } 
            </Container>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }){
    const user = users[authedUser]
    const answeredQuestionsIds = []
    const unansweredQuestionsIds = []

    Object.keys(questions).forEach(questionId => {
    
        if(Object.keys(user.answers).includes(questionId))
            answeredQuestionsIds.push(questionId)
        else
            unansweredQuestionsIds.push(questionId)
    });

    return {
        answeredQuestionsIds,
        unansweredQuestionsIds,
    }
}

export default connect(mapStateToProps)(Home)