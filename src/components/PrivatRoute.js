import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux' 

class PrivateRoute extends Component{
    render(){
        const {authedUser, component: Component, ...rest} = this.props
        return (
            <Route {...rest} render={props => {
                if (authedUser===null) {
                    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                }
                return <Component {...props} />
            }} />
        )   
    }
}

function mapStateToProps({ authedUser }, { component: Component, ...rest }){
    return {
      authedUser
    }
  }

export default connect(mapStateToProps)(PrivateRoute)