import React, { Component } from "react";
import Header from "./Components/Header.js"
import Artist from "./Components/Artist.js"
import "./App.css";

class App extends Component {
  render() {
    return(
    <div id="App">
      <Header title='Bradley is MINNNNEEEE' />;
      <Artist src='https://amp.businessinsider.com/images/5bacfa07dde8670ea1584c9b-750-563.jpg'
      name="Lady Gaga" hit="Just Dance"/>
    </div>
    )
  }
}

export default App;
