import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

	renderBots(){
		return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>)
	}

  render(){
    // console.log(this.props)
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
