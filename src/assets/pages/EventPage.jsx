import React, { useEffect } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import EventList from '../components/EventList'
import { useTitle } from '../contexts/TitleContext'

const EventPage = () => {
    const { setTitle } = useTitle()

    useEffect(() => {
        setTitle('Events')
        document.title = 'Events'
    }, [])

    return (
        <div className='event-list'>
            <EventList />
        </div>
    )
}

export default EventPage