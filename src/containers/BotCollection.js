import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
    console.log(this.props.bots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => <BotCard {...bot} key={bot.id} handleClick={this.props.enlist} />)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
