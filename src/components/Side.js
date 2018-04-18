import React from 'react'
import Logo from '../images/logo.png'

import Face from '../images/face.png'
import Insta from '../images/insta.png'
import Spoty from '../images/spoty.png'
import Twitter from '../images/twi.png'
const Side = () => {
  return (
    <section className='social'>
      <a href='/' target='_blank'>
        <h1>
          <img className='logo' src={Logo} alt='La Funk' />
        </h1>
      </a>
      <div className='redes'>
        <a className='shadowfilter' href='/'><img src={Face} alt='Facebook logo' /></a>
        <a className='shadowfilter' href='/'><img src={Insta} alt='Facebook logo' /></a>
        <a className='shadowfilter' href='/'><img src={Spoty} alt='Facebook logo' /></a>
        <a className='shadowfilter' href='/'><img src={Twitter} alt='Facebook logo' /> </a>
      </div>
    </section>
  )
}

export default Side
