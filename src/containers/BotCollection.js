import React from "react";
import BotsPage from './BotsPage'
import BotCard from '../components/BotCard.js'
import BotSpecs from '../components/BotSpecs.js'


class BotCollection extends React.Component {
	//your code here

	
	renderBot = () => {
		return this.props.bots.map((bot, index) => <BotCard key={index} bot={bot}/>)
	}


  render(){
		console.log(this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
					{this.props.bots.map((bot, index) => <BotCard botDecision={this.props.botDecision} key={index} bot={bot}/>)}        	
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
