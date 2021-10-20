import React, { Component } from "react"
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

class User extends Component{

    render() {
        const { user } = this.props
        const answeredQuestionsCount = Object.keys(user.answers).length
        const createdQuestionsCount = user.questions.length

        return (
            <Container>
                <Card>
                    <Card.Header>{ user.name }</Card.Header>
                    <img 
                    src={ user.avatarURL } 
                    alt={`avatar of ${ user.name }`} 
                    width="150" 
                    height="150"
                    style={{
                        borderRadius: "50%"
                    }}
                    />
                    <Card.Body>
                        <Card.Title>{`Answered Questions ${answeredQuestionsCount}`}</Card.Title>
                        <Card.Title>{`Created Questions ${createdQuestionsCount}`}</Card.Title>
                        <Card.Title>{`Score ${createdQuestionsCount+answeredQuestionsCount}`}</Card.Title>
                        
                    </Card.Body>
                </Card>
            </Container>
        )  
    }    
}

function mapStateToProps({ users }, { id }){
    const user = users[id]

    return {
        user,
    }
}

export default connect(mapStateToProps)(User)