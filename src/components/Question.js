import React, { Component } from "react";
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

class Question extends Component{
    render() {
        const { authedUser, author, question, id } = this.props 
        return (
            <Container>
                <Card>
                    <Card.Header>{ author.name }</Card.Header>
                    <Card.Body>
                        <Card.Title>Would you rather</Card.Title>
                        <Card.Text>
                        {`...${question.optionOne.text}...`}
                        </Card.Text>
                        <Button variant="outline-primary">View Poll</Button>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }){
    const question = questions[id]
    const author = question ? users[question.author] : null

    return {
        authedUser,
        author,
        question: question 
    }
}

export default connect(mapStateToProps)(Question)