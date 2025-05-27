
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { TitleProvider } from './assets/contexts/TitleContext'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import EventPage from './assets/pages/EventPage'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import BookingEventPage from './assets/pages/BookingEventPage'

function App() {


  return (
    <>
      <TitleProvider>
        <Routes>
            <Route path='/' element={<PortalLayout />}>
              <Route index element={<EventPage />} />
              <Route path='/events/:id' element={<EventDetailsPage />} />
              <Route path='/events/booking/:id' element={<BookingEventPage />} />
            </Route>
        </Routes>
      </TitleProvider>
    </>
  )
}

export default App
