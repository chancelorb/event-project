import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Events extends Component {

  render() {
    console.log(this.props.events);
    return (
      <div>
      <h2>This Is Events!</h2>
      {this.props.events.map(event => (
        <Link to ={`events/${event.id}`}><div key={event.id} className='event-list'>
          {event.id}
          <p>{event.event}</p>
          <p>{event.text}</p>
          <p>{event.img_url}</p>

        </div>
        </Link>
        //make the whole section of each event clickable
      ))}
    </div>
    )
  }
}

export default Events;
