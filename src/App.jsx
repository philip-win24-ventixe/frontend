
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import EventContext from './assets/contexts/EventContext'
import EventPage from './assets/pages/EventPage'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import BookingEvent from './assets/pages/BookingEventPage'
import BookingEventPage from './assets/pages/BookingEventPage'

function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<PortalLayout />}>
            <Route index element={<EventPage />} />
            <Route path='/events/:id' element={<EventDetailsPage />} />
            <Route path='/events/booking/:id' element={<BookingEventPage />} />
          </Route>
      </Routes>
    </>
  )
}

export default App

{/* <Route path='/' element={<PortalLayout />}>
          <Route path='/' element={<EventPage />} />

        </Route>    */}