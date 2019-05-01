import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	
	loadAllBots = () => {
		return this.props.bots.map((bot) => < BotCard enlistBot={this.props.enlistBot} {...bot}/>)
	}

  render(){
  	return (
  	  <div className="ui four column grid">
			Collection of all bots
    		<div className="row">
    		  {this.loadAllBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
