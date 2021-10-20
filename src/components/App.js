import React, { Component } from 'react'
import Home from  './Home'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux' 
import NewQuestion from './NewQuestion'
import Container from 'react-bootstrap/Container'
import ShowQuestion from  './ShowQuestion'
import LeaderBoard from './LeaderBoard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="container">
        {this.props.loading?null
        :<Container style={{width: "50%",}}>
            <Home/>
          </Container>
        }
      </div>
    ) 
  }
}

function mapStateToProps({ authedUser }){
  return {
    loading: authedUser == null
  }
}

export default connect(mapStateToProps)(App)
