import React from 'react'
import Logo from '../images/logo.png'
import BGtour from '../images/bgtour.png'
import Sparks from '../images/sparks.png'
import date1 from '../images/02.png'
import date2 from '../images/08.png'
import date3 from '../images/09.png'
import date4 from '../images/20.png'

import Face from '../images/face.png'
import Insta from '../images/insta.png'
import Spoty from '../images/spoty.png'
import Twitter from '../images/twi.png'

const MobileView = () => {
  return (
    <div className='mobile-container'>
      <section className='social-mobile'>
        <h1 className='logo-mobile'>
          <a href='/' target='_blank'>
            <img src={Logo} alt='La Funk' />
          </a>
        </h1>
        <div className='redes-mobile'>
          <a className='shadowfilter' href='/'><img src={Face} alt='Facebook logo' /></a>
          <a className='shadowfilter' href='/'><img src={Insta} alt='Facebook logo' /></a>
          <a className='shadowfilter' href='/'><img src={Spoty} alt='Facebook logo' /></a>
          <a className='shadowfilter' href='/'><img src={Twitter} alt='Facebook logo' /> </a>
        </div>
      </section>
      <img className='bg-img' src={BGtour} alt='background tour' />
      <img className='sparks' src={Sparks} alt='Sparks background' />

      <div className='dates-container'>
        <img className='date-4' src={date4} alt='Funk Date' />
        <img className='date-1' src={date1} alt='Funk Date' />
        <img className='date-3' src={date3} alt='Funk Date' />
        <img className='date-2' src={date2} alt='Funk Date' />
      </div>
    </div>
  )
}

export default MobileView
