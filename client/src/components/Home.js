import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Home extends Component {

  render() {
    console.log(this.props.events);
    return (
      <div>
      <h2>Welcome Home!</h2>
      <img src='https://files.slack.com/files-pri/T0351JZQ0-FAMD93QBG/logomakr_9ufv8t.png'/>
    </div>
    )
  }
}

export default Home;