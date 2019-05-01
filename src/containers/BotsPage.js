import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    owned: false
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then( res => res.json())
    .then( data => 
      // console.log(data)
      this.setState({
        bots: data
      })
    )
  }

  toggleBots = (id) => {
    this.setState({
      bots: this.state.bots.map( bot => {
        if(bot.id === id){
          return { ...bot,
          owned: !bot.owned }
        } else {
          return bot
        }
      })
    })
  }

  render() {
    let unownedBots = this.state.bots.filter( bot => !bot.owned)
    let ownedBots = this.state.bots.filter( bot => bot.owned)
    // console.log(unownedBots)

    return (
      <div>
        {/* put your components here */}
        <YourBotArmy ownedBots={ownedBots} toggleBots={this.toggleBots}/>
        <BotCollection unownedBots={unownedBots} toggleBots={this.toggleBots}/>
      </div>
    );
  }

}

export default BotsPage;
