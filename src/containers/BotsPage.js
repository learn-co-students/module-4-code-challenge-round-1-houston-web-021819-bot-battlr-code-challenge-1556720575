import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myArmy: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(response => response.json())
      .then(allBots => this.setState({
        bots: allBots
      }))
  }

  myArmyClick = (bot) => {
    console.log(bot.state)
    if (this.state.myArmy.includes(bot)){
      this.setState({
        bots: [...this.state.bots, bot]
      })
      this.setState({
        myArmy: this.state.myArmy.filter(bot => bot !== bot)
      })
    }
    else{
        this.setState({
          myArmy: [...this.state.myArmy, bot]
        })
      }
    }
  
  
  
  

  render() {
    //console.log(this.state.bots)
    console.log(this.state.myArmy)
    return (
      <div>
        <YourBotArmy bots = {this.state.myArmy} myArmyClick = {this.myArmyClick}/>
        <BotCollection bots = {this.state.bots} myArmyClick = {this.myArmyClick}/>
      </div>
    );
  }

}

export default BotsPage;
