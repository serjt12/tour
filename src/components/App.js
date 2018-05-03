import React from 'react'
import Side from './Side'
import BackgroundVideo from './BackgroundVideo'
import MobileView from './MobileView'
import TourDates from './TourDates'

const App = () => {
  return (
    <div className='main-container'>
      <BackgroundVideo />
      <Side />
      <MobileView />
      <TourDates />
    </div>
  )
}

export default App
