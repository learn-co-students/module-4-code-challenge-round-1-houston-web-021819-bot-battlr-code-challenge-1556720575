import React from "react";
 import BotCollection from'./BotCollection'
 import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {
  //start here with your code for step one
   state={bots:[]}
   getBots(){
    return fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res=>res.json())
    .then((bots)=>this.setState({bots:bots}))
  }

  
  render() {
    const freeBots=this.state.bots.filter((robos)=> {return robos.bot_class!=="Brickleberry"})
    const yourBots=this.state.bots.filter((robos)=> {return robos.bot_class==="Brickleberry"})
  
    return (
      <div>
         <BotCollection bots={freeBots}/>    <YourBotArmy bots={yourBots}/>
      </div>
    );

  }
  
  componentDidMount(){
    this.getBots()
  }
}

export default BotsPage;
