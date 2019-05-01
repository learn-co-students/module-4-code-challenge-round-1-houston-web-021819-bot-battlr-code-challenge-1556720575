import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  <BotCard {...this.props} armyClick={this.props.armyClick} key={this.props.id}/>
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
