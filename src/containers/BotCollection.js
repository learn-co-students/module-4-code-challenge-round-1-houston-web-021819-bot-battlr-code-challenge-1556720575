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

	render(){
		console.log(this.props.bots)
		return (
			<div className="ui four column grid">
				{this.props.bots.map((bot,index) => <BotCard {...bot} handleClick = {this.handleClick} shiftBot = {this.props.shiftBot}/>)}
			</div>
		)
	}

};

export default BotCollection;
