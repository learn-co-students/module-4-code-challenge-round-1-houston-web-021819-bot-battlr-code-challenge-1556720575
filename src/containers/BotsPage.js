import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    ownedBots: []
  }

  fetchBots(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(returnedBots => {
      this.setState({bots: returnedBots})
    })
  }

  componentDidMount(){
    this.fetchBots()
  }

  handleClick = (e) =>{
    // console.log(e.target.id)
    if (this.state.bots.find(bot => parseInt(e.target.id) === bot.id)){
      const clickedBot = this.state.bots.find(bot => parseInt(e.target.id) === bot.id)
      this.setState({bots: this.state.bots.filter(bot => bot.id !== parseInt(e.target.id)),
        ownedBots: [...this.state.ownedBots, clickedBot]})
    } else if (this.state.ownedBots.find(bot => parseInt(e.target.id) === bot.id)){
      const clickedBot = this.state.ownedBots.find(bot => parseInt(e.target.id) === bot.id)
      this.setState({bots: [...this.state.bots, clickedBot],
        ownedBots: this.state.ownedBots.filter(bot => bot.id !== parseInt(e.target.id))})
    }
  }
  
  render() {
    // console.log(this.state.bots.sort((a, b) => (a.id > b.id) ? 1 : -1))
    return (
      <div>
        {<YourBotArmy bots={this.state.ownedBots.sort((a, b) => (a.id > b.id) ? 1 : -1)} handleClick={this.handleClick}/>}
        {<BotCollection bots={this.state.bots.sort((a, b) => (a.id > b.id) ? 1 : -1)} handleClick={this.handleClick}/>}
      </div>
    );
  }

}

export default BotsPage;
