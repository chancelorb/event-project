import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Mapbox from './Mapbox';

export default class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: Object.assign({
        event: '',
        text: '',
        img_url: ''
      }, props.event)
    }
  }

editEvent(id) {
  this.props.history.push(`/api/events/${id}`);
}
//this will be accessed with the onClick event on EditEvent.js

  render() {
    const { event, text, id, img_url } = this.state.event
    return (
      <div>
        <h3>Edit Event: {id}</h3>
        <p>{event}</p>
        <p>{text}</p>
        <p>{img_url}</p>

        <Link to={`/api/events/${id}/edit`}><button>Edit Event</button></Link>
        <Link to="/api/events"> <button onClick={this.props.del} > DELETE</button> </Link>
        <Mapbox />
      </div>
    )
  }
}
