import React from "react";
import BotCard from "../components/BotCard"
import BotSpecs from "../components/BotSpecs"
import SortBar from "../components/SortBar"

class BotCollection extends React.Component {

  state = {
    selectedBot: {},
    sort: ""
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

  handleChange = (e) => {
    const newSort = e.target.name
    this.setState({ sort: newSort })
  }

  sortBots = () => {
    const bots = [...this.props.bots]
    if (!this.state.sort) {
      return bots
    } else {
      return bots.sort((a,b) => a[this.state.sort] < b[this.state.sort] ? 1 : -1)
    }
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          { !Object.keys(this.state.selectedBot).length ? <SortBar sort={this.state.sort} handleChange={this.handleChange}/> : null}
    		  {
            !Object.keys(this.state.selectedBot).length
            ? this.sortBots().map(bot => <BotCard {...bot} key={bot.id} handleClick={this.showSpecs}/>)
            : <BotSpecs {...this.state.selectedBot} key={this.state.selectedBot.id} goBack={this.goBack} enlist={this.props.enlist} />
          }
    		</div>
  	  </div>
  	)
  }
}

export default BotCollection;
