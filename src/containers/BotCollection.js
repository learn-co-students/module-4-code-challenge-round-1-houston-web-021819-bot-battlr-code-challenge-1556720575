import React from "react";
import BotCard from "../components/BotCard"
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {

  state = {
    selectedBot: {}
  }

  showSpecs = (id) => {
    const bot = this.props.bots.find(bot => bot.id === id)
    this.setState({
      selectedBot: bot
    })
  }

  goBack = () => {
    this.setState({
      selectedBot: {}
    })
  }

  render(){
    console.log(!Object.keys(this.state.selectedBot).length)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {
            !Object.keys(this.state.selectedBot).length
            ? this.props.bots.map(bot => <BotCard {...bot} key={bot.id} handleClick={this.showSpecs}/>)
            : <BotSpecs {...this.state.selectedBot} key={this.state.selectedBot.id} goBack={this.goBack} enlist={this.props.enlist} />
          }
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
