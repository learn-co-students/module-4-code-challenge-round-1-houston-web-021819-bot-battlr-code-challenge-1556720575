import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {

  state = {
    bots: []
  }

  handleBotClick = (thisBot) => {
    this.setState({
      bots: this.state.bots.map(bot => {
              if(thisBot.id === bot.id){
                bot.inArmy = !bot.inArmy
                return bot
              }else{
                return bot
              }
            })
    })
  }

  componentDidMount = () => {
    this.botFetch()
  }

  botFetch = () => {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(res => res.json())
      .then(botsData => this.setState({bots: botsData}))
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.bots} handleClick={this.handleBotClick} />
        <BotCollection bots={this.state.bots} handleClick={this.handleBotClick} />
      </div>
    );
  }

}

export default BotsPage;
