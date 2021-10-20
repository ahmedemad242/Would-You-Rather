import React, { Component } from "react"
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

class NewQuestion extends Component{
    state={
        firstQuestion:'',
        secondQuestion: '',
    }

    onChangeText(firstQuestion, secondQuestion){
        this.setState((state)=>({
            firstQuestion: firstQuestion===null?state.firstQuestion:firstQuestion,
            secondQuestion: secondQuestion===null?state.secondQuestion:secondQuestion
        }))
        
    }

    render() {
        const { authedUser, author, question, id } = this.props 
        return (
            <Container>
                <Card>
                    <Card.Header><h1>Create New Question</h1></Card.Header>
                    <Card.Body>
                        <Card.Title>Complete the question:</Card.Title>
                        <Card.Text>
                        Would you rather...
                        </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="formFirstQuestion">
                                <Form.Control 
                                value={this.state.firstQuestion} 
                                type="text" 
                                placeholder="Enter First Question"
                                onChange={(e)=>this.onChangeText(e.target.value,null)} />
                            </Form.Group>
                            <Card.Text>
                                OR
                            </Card.Text>
                            <Form.Group className="mb-3" controlId="formSecondQuestion">
                                <Form.Control value={this.state.secondQuestion}
                                type="text" 
                                placeholder="Enter Second  Question"
                                onChange={(e)=>this.onChangeText(null,e.target.value)} />
                            </Form.Group>
                            <Button variant="outline-primary">Submit</Button>
                        </Form>

                        
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

export default connect(mapStateToProps)(NewQuestion)