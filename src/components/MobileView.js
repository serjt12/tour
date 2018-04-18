import React from 'react'
import Logo from '../images/logo.png'
import BGtour from '../images/bgtour.png'
import Sparks from '../images/sparks.png'
import date1 from '../images/02.png'
import date2 from '../images/08.png'
import date3 from '../images/09.png'
import date4 from '../images/20.png'

const MobileView = () => {
  return (
    <div className='mobile-container'>
      <img className='bg-img' src={BGtour} alt='background tour' />
      <img className='sparks' src={Sparks} alt='Sparks background' />
      <h1>
        <a className='logo-mobile' href='/' target='_blank'>
          <img src={Logo} alt='La Funk' />
        </a>
      </h1>
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
