import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {

  state = {
    bots: [],
    specClick: null,
    filterType: '',
    searchType: ''
  }

  handleFilterAndSearch = () => {
    let botFilter;
    switch(this.state.filterType){
      case "":
        this.setState({
          ...this.state,
          bots: this.state.bots
        })
        botFilter = this.state.bots
        break;
      case "Defender":
        botFilter = this.state.bots.filter(bot => bot.bot_class === "Defender")
        break;
      case "Support":
        botFilter = this.state.bots.filter(bot => bot.bot_class === "Support")
        break;
      case "Assault":
        botFilter = this.state.bots.filter(bot => bot.bot_class === "Assault")
        break;
    }

    return botFilter
  }

  handleBotClick = (thisBot) => {
    this.setState({
      ...this.state,
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

  handleSpecClick = (thisBot) => {
    this.setState({
      ...this.state,
      specClick: thisBot
    })
  }

  componentDidMount = () => {
    this.botFetch()
  }

  botFetch = () => {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(res => res.json())
      .then(botsData => {
        this.setState({
          ...this.state,
          bots: botsData
        })
      })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.handleFilterAndSearch()} handleButtonClick={this.handleBotClick} handleClick={this.handleSpecClick} />
        {this.state.specClick ? <BotSpecs {...this.state.specClick} handleEnlistButtonClick={this.handleBotClick} handleGoBackClick={this.handleSpecClick} /> : <BotCollection bots={this.state.bots} handleClick={this.handleSpecClick} />}
      </div>
    );
  }

}

export default BotsPage;
