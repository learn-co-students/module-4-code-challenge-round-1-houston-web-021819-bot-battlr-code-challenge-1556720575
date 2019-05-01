import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = { bots: [], army: [], showBot: null, value: "" };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ bots: data });
      });
  }

  enlistBot = id => {
    let newRecruit = this.state.bots.find(bot => {
      return bot.id === id;
    });
    let newArmyState = this.state.army;
    if (newArmyState.includes(newRecruit)) {
      return;
    } else {
      newArmyState.push(newRecruit);
      this.setState({ army: newArmyState });
    }
  };

  dischargeBot = id => {
    let veteran = this.state.army.find(bot => {
      return bot.id === id;
    });
    let newArmyState = this.state.army;
    if (newArmyState.includes(veteran)) {
      let index = newArmyState.indexOf(veteran);
      newArmyState.splice(index, 1);
      this.setState({ army: newArmyState });
    }
  };

  showBot = bot => {
    this.setState({ showBot: bot });
  };

  hideBot = bot => {
    this.setState({ showBot: null });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  sortBots = () => {
    let newBots = this.state.bots;
    if (this.state.value === "health") {
      newBots.sort(function(a, b) {
        return b.health - a.health;
      });
      this.setState({ bots: newBots });
    } else if (this.state.value === "damage") {
      newBots.sort(function(a, b) {
        return b.damage - a.damage;
      });
      this.setState({ bots: newBots });
    } else if (this.state.value === "armor") {
      newBots.sort(function(a, b) {
        return b.armor - a.armor;
      });
      this.setState({ bots: newBots });
    } else if (this.state.value === "overall") {
      newBots.sort(function(a, b) {
        return b.armor + b.health + b.damage - (a.armor + a.health + a.damage);
      });
      this.setState({ bots: newBots });
    }
  };

  renderBots() {
    if (this.state.showBot) {
      return (
        <BotSpecs
          {...this.state.showBot}
          hideBot={this.hideBot}
          enlistBot={this.enlistBot}
        />
      );
    } else {
      return (
        <div>
          <div style={{ textAlign: "center" }}>
            {" "}
            Sort Bots By:{" "}
            <select
              value={this.state.value}
              onChange={this.onChange}
              className={"form-control"}
            >
              <option value={"select"}>Select an Option</option>
              <option value={"health"}>Health Capacity</option>
              <option value={"damage"}>Firepower</option>
              <option value={"armor"}>Armor Rating</option>
              <option value={"overall"}>Overall Capability</option>
            </select>{" "}
            <button onClick={this.sortBots}>Sort Bots!</button>
          </div>
          <br />
          <BotCollection
            bots={this.state.bots}
            enlistBot={this.enlistBot}
            showBot={this.showBot}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} dischargeBot={this.dischargeBot} />
        {this.renderBots()}
      </div>
    );
  }
}

export default BotsPage;
