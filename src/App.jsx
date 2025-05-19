
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import EventContext from './assets/contexts/EventContext'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<PortalLayout />}>
          <Route element={<EventContext />} />

        </Route>   
      </Routes>
    </>
  )
}

export default App
