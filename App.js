import React from 'react';
import logo from './logo.svg';


import Start from './components/Start.js';
import Create from './components/create.js';
import Card from './components/card.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: true
    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(condition) {
    this.setState({ condition })
  }

  render() {
    const { condition } = this.state;
    return (
      <React.Fragment>
        <button className="btn" onClick={() => this.handleClick(true)}>Go Back</button>
        <button className="float-sm-md-right" onClick={() => this.handleClick(false)}>Create Product</button>
        {condition === true ? <Create /> : <Start />}
        <Card />
      </React.Fragment>

    )
  }
}

export default App;
