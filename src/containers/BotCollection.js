import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"
class BotCollection extends React.Component {
	//your code here
	
	state ={
		clicked: false
	}

	handleClick = () => {
		this.setState({
			clicked: !this.state.clicked
		})
	}

	showBotSpecs = (bot,id) => {
			if(bot.id === id){
				let botCard = document.querySelector('ui four column grid')
				botCard.remove()
				return this.props.bots.map((bot,id) => <BotSpecs {...bot}/>)
			} else{
				return bot
			}
	}
	render(){
		console.log(this.props.bots)
		return (
			<div className="ui four column grid">
				< div className = "row" >
					
					{this.props.bots.map((bot,index) => <BotCard {...bot} handleClick = {this.handleClick} shiftBot = {this.props.shiftBot} showBotSpecs = {this.showBotSpecs}/>)}
					{
						this.props.bots.map((bot,index) => 
						<BotSpecs 
						{...bot}
						style = {{display: !this.state.clicked ? 'none' : 'block'}}
						clicked = {this.state.clicked} 
						shiftBot = {this.props.shiftBot} 
						 />)
					}
				</div>

			</div>
		)
	}

};

export default BotCollection;
