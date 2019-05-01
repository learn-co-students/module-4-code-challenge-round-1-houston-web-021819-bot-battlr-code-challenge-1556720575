import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy'
 
class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots:[],
    myBots:[]
  }
  
  componentDidMount(){
    fetch(' https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botsData => this.setState({
          bots:botsData
        })
      )
  }

  bots = () => {
    let bots = this.state.bots
    return bots
  }
 
  addToArmy = (id) =>{
    let findBot =  this.state.bots.filter(bot => bot.id == id)[0]
    this.state.myBots.push(findBot)    
    this.setState({
      myBots: this.state.myBots.filter((bot, index) => this.state.myBots.indexOf(bot) == index) //no duplicate
    })

  }


  render() {
    //console.log(this.state.myBots)
    let bots = this.bots()
    return (
      <div>
        <YourBotArmy myBots = {this.state.myBots}/> 
        <BotCollection allBots = {bots} addToArmy = {this.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
