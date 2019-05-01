import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					{/*...and here..*/}
						<h1>Collection of all bots</h1>
						{this.props.unownedBots.map( bot => (
							<BotCard {...bot} toggleBots={this.props.toggleBots}/>
						))}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
