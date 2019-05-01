import React from "react";
import YourBotArmy from "./YourBotArmy"
import BotCollection from "./BotCollection"

export default class BotsPage extends React.Component {

  state = {
    bots: []
  }

  enlist = (id) => {
    const editBots = [...this.state.bots]
    this.setState({
      bots: editBots.map(bot => bot.id === parseInt(id) ? {...bot, enlisted: true} : bot)
    })
  }

  retire = (id) => {
    const editBots = [...this.state.bots]
    this.setState({
      bots: editBots.map(bot => bot.id === parseInt(id) ? {...bot, enlisted: false} : bot)
    })
  }

  enlistedBots = () => {
    const allBots = [...this.state.bots]
    return allBots.filter(bot => bot.enlisted)
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({
      bots: bots.map(bot => {
        return {...bot, enlisted: false}
      })
    }))
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.enlistedBots()} retire={this.retire}/>
        <BotCollection bots={this.state.bots} enlist={this.enlist}/>
      </div>
    )
  }
}
