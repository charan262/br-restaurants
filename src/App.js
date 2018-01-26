import React, { Component } from 'react';
import RestaurantsInfo from './containers/RestaurantsInfo';
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
      <div className="header"><p className="lunch">Lunch Time</p></div>
      <div className="App">
         <RestaurantsInfo/>
      </div>
      </div>
    );
  }
}

export default App;
