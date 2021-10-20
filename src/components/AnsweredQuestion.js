import React, { Component } from "react"
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'

class AnsweredQuestion extends Component{
    render() {
        const { authedUser, author, users, question, id } = this.props
        
        const answer = users[authedUser].answers[id]
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes

        return (
            <Container>
                <Card>
                    <Card.Header>Asked by { author.name }</Card.Header>
                    <Card.Body>
                        <Card.Title>Results:</Card.Title>
                        <Container>
                            <Card bg={optionOneVotes>optionTwoVotes?"success":optionOneVotes===optionTwoVotes?"secondary":null}>
                                <Card.Body>
                                    <Card.Title>{question.optionOne.text}</Card.Title>
                                    <Card.Text>
                                        {answer==="optionOne"?"Your vote":""}
                                    </Card.Text>
                                    <Card.Text>
                                        {`${optionOneVotes} out of ${totalVotes} votes`}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>

                        <Container>
                            <Card bg={optionTwoVotes>optionOneVotes?"success":optionOneVotes===optionTwoVotes?"secondary":null}>
                                <Card.Body>
                                    <Card.Title>{question.optionTwo.text}</Card.Title>
                                    <Card.Text>
                                        {answer==="optionTwo"?"Your vote":""}
                                    </Card.Text>
                                    <Card.Text>
                                    {`${optionTwoVotes} out of ${totalVotes} votes`}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Card.Body>
                </Card>
            </Container>
        )   
    }    
}

function mapStateToProps({ authedUser, users, questions }, { id }){
    const question = questions[id]
    const author = users[question.author]

    return {
        authedUser,
        author,
        users,
        question: question 
    }
}

export default connect(mapStateToProps)(AnsweredQuestion)