import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    owned: false,
    visible: false
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
    // console.log("i'm clicked")
    this.setState({
      bots: this.state.bots.map( bot => {
        if(bot.id === id){
          return {...bot}
        } else {
          return bot
        }
      })
    })
  }

  toggleDisplay = () => {
    this.setState({
      visible: true
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
  
      { !this.state.visible ? 
        <BotCollection unownedBots={unownedBots} toggleBots={this.toggleBots}/> :
        <BotSpecs toggleBots={this.toggleBots}/>
      }
      </div>
    );
  }

}

export default BotsPage;
