import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  state ={
    enlistedBots: []
  }

  loadEnlistedBots = () => {
    return this.props.enlistedBots.map((bot) => < BotCard deEnlistBot={this.props.deEnlistBot} {...bot}/>
    )}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
      Your Bot Army
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.loadEnlistedBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
