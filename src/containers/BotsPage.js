import React from "react";
import BotCollection from './BotCollection'
import YourArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
  	bots: [],
  	myArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => {
        return res.json()
      })
      .then(data => {
      	console.log(data)
        this.setState({
        	bots: data
        })
  	})
  }

  render() {
    return (
      <div>
      {console.log(this.state)}
      <BotCollection bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
