import React, { Component, Fragment } from 'react'
import Home from  './Home'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux' 
import NewQuestion from './NewQuestion'
import Container from 'react-bootstrap/Container'
import ShowQuestion from  './ShowQuestion'
import LeaderBoard from './Leaderboard'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Login from './Login'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }  
  render() {   
    return (
      <Router>
     
      <Fragment>  
      <LoadingBar/>
      <Container className='container'>
        <Nav/>
        
        {
        this.props.loading
        ? null
        : <Container style={{width: "50%",}}>
            <Switch>
              <Route path='/question/:id' exact component={ShowQuestion}/>
              <Route path='/' exact component={Home}/>
              <Route path='/leaderboard' exact component={LeaderBoard}/>
              <Route path='/add' exact component={NewQuestion}/>
              <Route path='/login' exact component={Login}/>
              <Redirect from="*" to="/" />
            </Switch>
          </Container>
        }
      </Container>
      </Fragment>  
      </Router>
    ) 
  }
}

function mapStateToProps({ authedUser, questions }){
  return {
    loading: questions === {},
    authedUser
  }
}




export default connect(mapStateToProps)(App)
