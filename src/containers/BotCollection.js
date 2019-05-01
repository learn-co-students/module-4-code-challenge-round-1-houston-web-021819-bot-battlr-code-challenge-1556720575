import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  state={bots:this.props.bots}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot=> <BotCard bot={bot}/>)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
