import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = (props) => (
  <div className="ui segment inverted olive bot-army">
    <div className="ui five column grid">
      <div className="row bot-army-row">
        {props.bots.map(bot => <BotCard {...bot} key={bot.id} handleClick={props.retire}/>)}
      </div>
    </div>
  </div>
)

export default YourBotArmy;
