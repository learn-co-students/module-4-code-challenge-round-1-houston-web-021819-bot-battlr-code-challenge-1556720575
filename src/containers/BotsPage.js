import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    bots: [],
    ownedBots: [],
    isFiltered: false
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

  filter = () => {
    this.setState({isFiltered: !this.state.isFiltered})
  }

  handleClick = (e) =>{
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
    console.log(this.state.isFiltered)
    return (
      <div>
        <form>
          <input type="checkbox" id="badassFilter" onClick={this.filter}></input><h4>Badass Filter (limit to bots with attack >80)</h4>
        </form>
        {<YourBotArmy bots={this.state.ownedBots.sort((a, b) => (a.id > b.id) ? 1 : -1)} handleClick={this.handleClick} filtered={this.state.filterd} />}
        {<BotCollection bots={this.state.bots.sort((a, b) => (a.id > b.id) ? 1 : -1)} handleClick={this.handleClick} filtered={this.state.filtered} />}
      </div>
    );
  }

}

export default BotsPage;
