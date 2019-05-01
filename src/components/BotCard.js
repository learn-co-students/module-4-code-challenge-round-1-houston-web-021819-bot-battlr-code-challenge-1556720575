import React from "react";

class BotCard extends React.Component {
  state= {bot:this.props}
   render(){
  let botType;

  switch (this.state.bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={this.state.bot.id}
        >
      
      <input type='checkbox' onClick={()=> this.setState(this.state.bot,{bot:{bot_class:'Brickleberry'}})}/>
        <div className="image">
          <img alt="oh no!" src={this.state.bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {this.state.bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{this.state.bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {this.state.bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {this.state.bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {this.state.bot.armor}
          </span>
        </div>
      </div>
    </div>
  );
  }
};

export default BotCard;
