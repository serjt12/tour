import React, { Component } from 'react'
import videoURL from '../videos/intro.mp4'
import Side from './Side'

class App extends Component {
  state = { videoURL }
  render () {
    const { state: { videoURL } } = this
    return (
      <div className='main-container'>
        <video id='background-video' loop autoPlay muted>
          <source src={videoURL} type='video/mp4' />
          <source src={videoURL} type='video/ogg' />
          Your browser does not support the video tag.
        </video>
        <Side />
      </div>
    )
  }
}

export default App
