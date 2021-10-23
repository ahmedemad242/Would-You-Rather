import React, { Component } from "react";
import Question from './Question'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import Login from './Login'

class Home extends Component{
    state = {
        isAnswered: false,
    }

    onToggle(event){
        this.setState(()=>({
            isAnswered: event === "answered"? true : false
        }))
    }
    render() {
        if(this.props.authedUser === null)
            return <Login redirectTo = '/'/>

        const { answeredQuestionsIds, unansweredQuestionsIds } = this.props      

        return (
            <Container>
                <Tabs defaultActiveKey="unanswered" id="answered-or-unanswered" className="mb-3" onSelect={(e)=>this.onToggle(e)}>
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
    if(authedUser === null )
        return {
            authedUser
        }
        
    const user = users[authedUser]
    
    const answeredQuestionsIds = []
    const unansweredQuestionsIds = []

    Object.keys(questions).forEach(questionId => {
        if(Object.keys(user.answers).includes(questionId))
            answeredQuestionsIds.push(questionId)
        else
            unansweredQuestionsIds.push(questionId)
    });
    answeredQuestionsIds.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    unansweredQuestionsIds.sort((a,b) => questions[b].timestamp - questions[a].timestamp)

    return {
        authedUser,
        answeredQuestionsIds,
        unansweredQuestionsIds,
    }
}

export default connect(mapStateToProps)(Home)