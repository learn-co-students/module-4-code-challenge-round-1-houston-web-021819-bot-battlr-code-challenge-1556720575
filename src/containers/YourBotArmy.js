import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your bot army
            {this.props.armyBots.map(bot => <BotCard {...bot} />)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
