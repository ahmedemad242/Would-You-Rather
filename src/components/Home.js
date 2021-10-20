import React, { Component } from "react";
import Question from './Question'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
  

class Home extends Component{
    state = {
        isAnswered: true,
    }

    onToggle(event){
        this.setState(()=>({
            isAnswered: event === "answered"? true : false
        }))
    }

    render() {
      
        return (
            <Container>
                <Tabs defaultActiveKey="answered" id="answered-or-unanswered" className="mb-3">
                    <Tab eventKey="answered" title="Answered Questions">
                    </Tab>
                    <Tab eventKey="unanswered" title="Unanswered Questions">
                    </Tab>
                </Tabs>

                    {this.state.isAnswered
                    ? (<div><Question id = '8xf0y6ziyjabvozdd253nd'/><Question id = '8xf0y6ziyjabvozdd253nd'/></div>)
                    :
                    (<Question id = '8xf0y6ziyjabvozdd253nd'/>)
                    } 
            </Container>
        )
    }
}

export default Home 