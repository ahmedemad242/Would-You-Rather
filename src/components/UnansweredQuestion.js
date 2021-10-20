import React, { Component } from "react"
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AnsweredQuestion extends Component{
    state = {
        answer: ""
    }

    onChange(answer){
        this.setState(()=>({
            answer:answer
        }))
    }


    render() {
        const { authedUser, author, users, question, id } = this.props

        return (
            <Container>
                <Card>
                    <Card.Header>Asked by { author.name }</Card.Header>
                    <Card.Body>
                        <Card.Title><h1>Would You Rather...</h1></Card.Title>
                        <Form.Check
                            type="radio"
                            label={question.optionOne.text}
                            name="group2"
                            id="optionOne"
                            onChange={()=>this.onChange("optionOne")}
                        /> 
                        <Form.Check
                            type="radio"
                            label={question.optionTwo.text}
                            name="group2"
                            id="optionTwo"
                            onChange={()=>this.onChange("optionOne")}
                        /> 
                        <Button variant="outline-primary" disabled={this.state.answer===''}>Submit</Button>
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
        users,
        question: question 
    }
}

export default connect(mapStateToProps)(AnsweredQuestion)