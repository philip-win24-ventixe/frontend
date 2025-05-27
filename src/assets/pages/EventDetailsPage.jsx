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
        <div className='event-details'>
            <h1>{event.title}</h1>
            <Link to={`/events/booking/${id}`} className='btn btn-booking'>Book Event</Link>
        </div>
    )
}

export default EventDetailsPage