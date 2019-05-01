import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  botMap = () => {
		return this.props.bots.filter(bot => !bot.inArmy).map(bot => <BotCard {...bot} handleClick={this.props.handleClick} />)
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.botMap()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
