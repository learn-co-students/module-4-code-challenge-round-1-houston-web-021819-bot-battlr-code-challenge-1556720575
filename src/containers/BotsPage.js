import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  state = {
    bots:[],
    inArmy: false
  }

  componentDidMount(){
    fetch ('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => this.setState({
        bots:bots
      }))
  }

  armyClick = (id) => {
    this.setState({
      bots: this.state.bots.map(bot => {
        return bot.id === id ? {...bot, inArmy:!bot.inArmy} : bot
      })
    })
  }

  allBots = () =>{
    return this.state.bots.map(bot =>(
      <BotCollection key={bot.id} {...bot } armyClick= {this.armyClick}/>
    ))
  }

  render() {
    return (
      <div>
        < YourBotArmy />
        {this.allBots()}
      </div>
    );
  }

}

export default BotsPage;
