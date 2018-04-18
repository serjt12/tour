import React from 'react'
import Side from './Side'
import BackgroundVideo from './BackgroundVideo'
import MobileView from './MobileView'

const App = () => {
  return (
    <div className='main-container'>
      <BackgroundVideo />
      <Side />
      <MobileView />
    </div>
  )
}

export default App
