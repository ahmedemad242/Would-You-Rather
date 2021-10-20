import React, { Component, Fragment } from 'react'
import Home from  './Home'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux' 
import NewQuestion from './NewQuestion'
import Container from 'react-bootstrap/Container'
import ShowQuestion from  './ShowQuestion'
import LeaderBoard from './LeaderBoard'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'

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
        {this.props.loading?null
        :<Container style={{width: "50%",}}>
          <Route path='/' exact component={Home}/>
          <Route path='/leaderboard' exact component={LeaderBoard}/>
          <Route path='/question/:id' exact component={ShowQuestion}/>
          <Route path='/new' exact component={NewQuestion}/>
          </Container>
        }
      </Container>
      </Fragment>  
      </Router>
    ) 
  }
}

function mapStateToProps({ authedUser }){
  return {
    loading: authedUser == null
  }
}

export default connect(mapStateToProps)(App)
