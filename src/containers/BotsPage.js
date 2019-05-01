import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  
  state = {
    bots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({
      bots: bots
    }))
  }
    //start here with your code for step one

    shiftBot = (id) => {
      this.setState({
        bots: this.state.bots.map(bot => {
          if(bot.id === id){
            return{...bot, clicked: !bot.clicked}
          }else{
            return bot
          }
        })
      })
    }

  render() {
    console.log(this.state.bots)
    let allBots = this.state.bots
    return (
      <div>
        
          <BotCollection allBots={allBots}
          shiftBot={this.shiftBot}
          />
          <YourBotArmy allBots={allBots}
          shiftBot={this.shiftBot}/>
        )
        )}
      </div>
    );
  }

}

export default BotsPage;
