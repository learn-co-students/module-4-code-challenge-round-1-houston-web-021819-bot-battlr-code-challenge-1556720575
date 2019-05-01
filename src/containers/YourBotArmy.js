import React from "react";

import BotCard from '../components/BotCard.js'
import BotSpecs from '../components/BotSpecs.js'


class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}

            Your Bot Army
            <BotCard />
            <BotSpecs />
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
