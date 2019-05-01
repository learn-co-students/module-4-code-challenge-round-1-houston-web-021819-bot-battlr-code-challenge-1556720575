import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  botArmyMap = () => {
		return this.props.bots.filter(bot => bot.inArmy).map(bot => <BotCard {...bot} handleClick={this.props.handleClick} />)
	}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.botArmyMap()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
