import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'   
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component{
    state = {
        authedUser: this.props.authedUser,
        toHome: false
    }

    onSelect(authedUser) {
        this.setState(()=>({
            authedUser
        }))
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(this.state.authedUser))
        this.setState(()=>({
            toHome: true
        }))
    }

    render(){
        if(this.state.toHome)
            return (<Redirect to='/'/>)

        const { users } = this.props
        return (
            <Container>
                <Card>
                    <Card.Header>Welcome to Would You Rather app!</Card.Header>
                    <Card.Body>
                        <Card.Title>Sign in to continue</Card.Title>
                        <Card.Text>
                        <select 
                        value={this.state.authedUser===null?"Select user":this.state.authedUser} 
                        id="users" 
                        onChange={(e)=>this.onSelect(e.target.value)}>
                        <option key="default" value="Select user" disabled>Select users</option>
                        {
                            Object.keys(users).map((userId)=> (
                                <option 
                                key={userId} 
                                value={userId}                                
                                >{users[userId].name}</option>
                            ))
                        }  
                        </select>                          
                        </Card.Text>
                       
                        <Button 
                        variant="outline-primary" 
                        onClick={(e)=>{this.handleSubmit(e)}}
                        disabled={this.state.authedUser===null?true:false}>Sign in</Button>
                        
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

function mapStateToProps({ users, authedUser }){
    return {
        users,
        authedUser,
    }
}

export default connect(mapStateToProps)(Login)