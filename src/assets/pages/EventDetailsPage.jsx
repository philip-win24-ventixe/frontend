import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTitle } from '../contexts/TitleContext' 

const EventDetailsPage = () => {

    const {id} = useParams()
    const [event, setEvent] = useState({})
    const { setTitle } = useTitle()

    const getEvent = async () => {
        const res = await fetch(`https://philipventixieeventservice-f6f6faasfgc3gsbt.swedencentral-01.azurewebsites.net/api/Events/${id}`)

        if (res.ok) {
            const response = await res.json()
            setEvent(response.result)
        }
    }

    useEffect(() => {
        setTitle('Event Details')
        document.title = 'Event Details'
        getEvent()
    }, [])

    return (
        <div className='event-details-card'>
            <div className='image-box'></div>
            <Link to={`/events/booking/${id}`} className='btn btn-booking'>Book Event</Link>
            <h4 className='event-details-headline'>{event.title}</h4>
            <div className='event-details'>
                <div className='event-details-where'>
                    <span className='event-details-time'>
                        <i className="fa-regular fa-calendar-xmark event-details-symbol"></i>
                        {new Date(event.eventDate).toLocaleDateString()} - {new Date(event.eventDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}
                    </span>
                    <span className='event-details-location'>
                        <i className="fa-regular fa-location-dot event-details-symbol"></i>
                        {event.location}
                    </span>
                </div>
                
                <div className='event-details-tickets'>
                    <span>Tickets Sold</span>
                    <div className='ticket-numbers'>
                        <span className='sold-tickets'>21,000</span>
                        <span className='max-tickets'>/30,000</span>
                    </div>
                </div>
                <div className='event-details-price'>
                    <span className=''>Starts from</span>
                    <span className='price-detail'>$60</span>
                </div>
            </div>
            

            <div className='divider'></div>
            <p className='event-details-about-title'>About Event</p>
            <p className='event-details-description'>{event.description}</p>
        </div>
    )
}

export default EventDetailsPage