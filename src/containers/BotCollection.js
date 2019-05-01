import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
 
  render(){
		//console.log(this.props.allBots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.allBots.map(bot => <BotCard {...bot} addToArmy = {this.props.addToArmy}/>)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }
 
};

export default BotCollection;
