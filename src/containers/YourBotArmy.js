import React from "react";
import RecruitCard from "../components/RecruitCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.army.map(bot => {
              return (
                <RecruitCard {...bot} dischargeBot={this.props.dischargeBot} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
