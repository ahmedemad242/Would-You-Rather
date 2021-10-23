import React, { Component } from "react"
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'
import Login from './Login'




class NewQuestion extends Component{
    state={
        firstQuestion:'',
        secondQuestion: '',
        toHome: false,
    }

    onChangeText(firstQuestion, secondQuestion){
        this.setState((state)=>({
            firstQuestion: firstQuestion===null?state.firstQuestion:firstQuestion,
            secondQuestion: secondQuestion===null?state.secondQuestion:secondQuestion
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAddQuestion(this.state.firstQuestion,this.state.secondQuestion))
        this.setState(()=>({
            toHome: true
        }))
        
    }

    render() {
        if(this.props.authedUser === null)
            return <Login redirectTo = '/add'/>

        if(this.state.toHome)
            return (<Redirect to='/'/>)

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
                            <Form.Group className="mb-3" controlId="formFirstQuestion" >
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
                                <Button 
                                variant="outline-primary" 
                                type="submit"
                                disabled={this.state.firstQuestion===''|| this.state.secondQuestion===''}
                                onClick={(e)=>this.handleSubmit(e)}
                                >Submit</Button>
                        </Form>

                        
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

function mapStateToProps({  authedUser }){
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion)