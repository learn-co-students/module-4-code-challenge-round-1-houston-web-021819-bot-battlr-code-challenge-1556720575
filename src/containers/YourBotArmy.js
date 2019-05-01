import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

	renderBots(){
    if (this.props.isfiltered) {
		    this.props.bots.filter(bot =>  bot => bot.damage > 80).map(bot => {
        return <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>
        }
     )
   } else{
     return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>)
   }
  }
	

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <h1>Your Bot Army</h1>
            <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
