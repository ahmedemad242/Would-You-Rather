import React, { Component } from "react"
import { connect } from 'react-redux'
import User from "./User"
import Login from './Login'

class LeaderBoard extends Component{

    render() {
        if(this.props.authedUser === null)
            return <Login redirectTo = '/leaderboard'/>
        return (
            <ul className="dashboard-list">
                    {this.props.usersIds.map((id)=>(
                        <li key={id}>
                            <User id= {id} />
                        </li>
                    ))}
                </ul>
        )  
    }    
}

function mapStateToProps({ users, authedUser }){
    return {
        authedUser,
        usersIds: Object.keys(users).sort((a, b) => Object.keys(users[b].answers).length +
        users[b].questions.length - (Object.keys(users[a].answers).length +
        users[a].questions.length))
    }
}

export default connect(mapStateToProps)(LeaderBoard)