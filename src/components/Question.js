import React, { Component } from "react";
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

class Question extends Component{
    render() {
        
        const { author, question, id } = this.props 
        return (
            <Link to={`/question/${id}`}>
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
            </Link>
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