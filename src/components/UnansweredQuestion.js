import React, { Component } from "react"
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import  { handleAnswerQuestion } from '../actions/shared'

class AnsweredQuestion extends Component{
    state = {
        answer: ""
    }

    onChange(answer){
        this.setState(()=>({
            answer:answer
        }))
    }

    handleAnswer = (e) => {
        e.preventDefault()
        
        const { dispatch, question } = this.props
        dispatch(handleAnswerQuestion({
            question,
            answer: this.state.answer,
        }))
    }


    render() {
        const { author, question } = this.props

        return (
            <Container>
                <Card>
                    <Card.Header>Asked by { author.name }</Card.Header>
                    <img 
                    src={ author.avatarURL } 
                    alt={`avatar of ${ author.name }`} 
                    width="150" 
                    height="150"
                    style={{
                        borderRadius: "50%"
                    }}
                    />
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
                            onChange={()=>this.onChange("optionTwo")}
                        /> 
                        <Button variant="outline-primary" onClick={(e)=>this.handleAnswer(e)} disabled={this.state.answer===''}>Submit</Button>                        
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
        question: question 
    }
}

export default connect(mapStateToProps)(AnsweredQuestion)