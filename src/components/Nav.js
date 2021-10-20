import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component{
  handleLogout(e){  
    e.preventDefault()
    this.props.dispatch(setAuthedUser(null))
  }

  render(){
    const { users, authedUser } = this.props

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              LeaderBoard
            </NavLink>
          </li>
          {
          authedUser===null
          ? <li>
              <NavLink to='/login' activeClassName='active'>
                Login
              </NavLink>
            </li>
          : 
            <Fragment>
              <li>
                <NavLink to='/home' activeClassName='active' onClick={(e)=>this.handleLogout(e)}>
                  Logout
                </NavLink>
              </li>
              <li>  
                Hello {users[authedUser].name}!
              </li>
            </Fragment>
          }
        </ul>
      </nav>
    )
  }
} 

function mapStateToProps({ users, authedUser }){
  return {
      users,
      authedUser,
  }
}

export default connect(mapStateToProps)(Nav)