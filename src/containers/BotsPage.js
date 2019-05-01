import React from "react";
import BotCard from "../components/BotCard";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


/* structure : BotsPage
                - BotsCollection
                    -BotCard
                    -BotSpecs
                - Your Bot army 
                   -BotCard
                   -BotSpecs
                
*/

class BotsPage extends React.Component {
  //start here with your code for step one


	state = {
    bots: [],
    selection: null
	}

	componentDidMount(){
		fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
		.then(res=> res.json())
		.then(botsData => {
			this.setState({
				bots: botsData
			})
    })
    console.log(this.state.bots)
	}

  botDecision = (selectedId) => {
    this.state.bots.map((bot) => {
      if(selectedId ==bot.id){
        if (bot.selected == false )
          this.setState({
            selection: 'YourArmy'
          })
      } else if(bot.selected == true){
        this.setState({
          selection: 'BotCollection'
        })
      }
    })  
  }

	botsToBeRendered = () => {
		return this.state.bots
	}

  render() {
    console.log(this.state.bots)
    return (
      <div>
        {/* put your components here */}
        <BotCollection botDecision={this.botDecision} bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
