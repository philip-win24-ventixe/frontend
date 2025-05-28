import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({item}) => {


  return (
    <Link to={`/events/${item.id}`}>
      <div className='event-card'>
        <div className='image-box'></div>
        <span className='event-card-date'>{new Date(item.eventDate).toLocaleDateString()} - {new Date(item.eventDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}</span>
        <span className='event-card-title'>{item.title}</span>
        <span className='event-card-location'>
          <i className="fa-regular fa-location-dot event-card-pin"></i>
          {item.location}
        </span>
      </div>
    </Link>
  )
}

export default EventItem