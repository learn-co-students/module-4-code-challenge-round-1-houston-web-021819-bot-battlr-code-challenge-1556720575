import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  state = {
    bots: [],
    armyBots: []
  }
  //start here with your code for step one
  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botsData => this.setState({
      bots: botsData
    }))
  }


	shiftBot = (bot, id) => {
			if(bot.id === id){
        this.state.armyBots.push(bot)
        this.setState({
          ...this.state,
          armyBots: this.state.armyBots
        })
        return this.state.armyBots
			} else{
				return bot
			}

	}

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy armyBots = {this.state.armyBots}/> 
        <BotCollection bots = {this.state.bots} shiftBot = {this.shiftBot}/>
      </div>
    );
  }

}

export default BotsPage;
