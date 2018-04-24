import React from 'react'
import Logo from '../images/logo.png'
import BGtour from '../images/bgtour.png'
import Sparks from '../images/sparks.png'
import Ball from '../images/bola.png'
import Dates from './Dates'

import Face from '../images/face.png'
import Insta from '../images/insta.png'
import Spoty from '../images/spoty.png'
import Twitter from '../images/twi.png'

const MobileView = () => {
  return (
    <div className='mobile-container'>
      <img className='bg-img' src={BGtour} alt='background tour' />
      <img className='sparks' src={Sparks} alt='Sparks background' />
      <img className='ball' src={Ball} alt='Ball background' />
      <Dates />
      <section className='social-mobile'>
        <h1 className='logo-mobile'>
          <a href='/' target='_blank'>
            <img src={Logo} alt='La Funk' />
          </a>
        </h1>
        <div className='redes-mobile'>
          <a href='/'><img src={Face} alt='Facebook logo' /></a>
          <a href='/'><img src={Insta} alt='Facebook logo' /></a>
          <a href='/'><img src={Spoty} alt='Facebook logo' /></a>
          <a href='/'><img src={Twitter} alt='Facebook logo' /> </a>
        </div>
      </section>
    </div>
  )
}

export default MobileView
