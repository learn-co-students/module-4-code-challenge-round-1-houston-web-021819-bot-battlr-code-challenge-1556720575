import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    bots: [],
  }

  enlistBot = (bot) => {
    this.setState({ enlistedBots: [...this.state.enlistedBots, bot] })  
  }

  deEnlistBot = (bot) => {
    let newBots = this.state.bots
    let index = newBots.indexOf(bot.id)
    newBots.splice(index, 1)
    this.setState({bots: newBots})
  }




  render() {
    console.log(this.state.enlistedBots)
    return (
      <div>
        < YourBotArmy  deEnlistBot={this.deEnlistBot} enlistedBots={this.state.enlistedBots}/>
        < BotCollection enlistBot={this.enlistBot} bots={this.state.bots}/>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(allBots => this.setState({bots: allBots}))
  }

}

export default BotsPage;
