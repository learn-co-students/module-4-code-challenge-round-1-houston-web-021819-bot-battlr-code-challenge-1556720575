import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  
  createBots() {
    return this.props.bots.map(x => <BotCard bot={x}/>)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {console.log(this.props.bots)}
          {this.createBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
