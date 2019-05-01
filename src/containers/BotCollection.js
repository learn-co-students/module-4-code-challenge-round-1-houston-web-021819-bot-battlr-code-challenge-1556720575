import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	

	renderBots(){
		return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>)
	}

  render(){
  	return (
  	  <div className="ui four column grid">
			  <h1>Available Bots</h1><br></br>

    		<div className="row">
					{this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
