import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import BotCollection from './containers/BotCollection'

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BotsPage />
      </div>
    );
  }
}

export default App;
