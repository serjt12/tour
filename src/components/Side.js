import React from 'react'
import Logo from '../images/logo.png'

import Face from 'react-icons/lib/fa/facebook-official'
import Insta from 'react-icons/lib/fa/instagram'
import Sound from 'react-icons/lib/fa/soundcloud'
import Tweeter from 'react-icons/lib/fa/twitter'
const Side = () => {
  return (
    <ul className='social'>
      <li>
        <a className='shadowfilter' href='/' target='_blank'>
          <h1>
            <img src={Logo} alt='La Funk' />
          </h1>
        </a>
      </li>

      <li className='redes'>
        <a className='shadowfilter' href='/'><Face /></a>
        <a className='shadowfilter' href='/'><Insta /></a>
        <a className='shadowfilter' href='/'><Sound /></a>
        <a className='shadowfilter' href='/'><Tweeter /> </a>
      </li>
    </ul>
  )
}

export default Side
