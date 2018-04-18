import React from 'react'
import Logo from '../images/logo.png'

var Face = require('react-icons/lib/fa/facebook-official')
var Insta = require('react-icons/lib/fa/instagram')
var Sound = require('react-icons/lib/fa/soundcloud')
var Tweeter = require('react-icons/lib/fa/twitter')
const Side = () => {
  return (
    <ul className='social'>
      <a className='shadowfilter' href='/' target='_blank'><img src={Logo} alt='La Funk' /></a>

      <div className='redes'>
        <a className='shadowfilter' href='/'><Face /></a>
        <a className='shadowfilter' href='/'> <Insta /></a>
        <a className='shadowfilter' href='/'> <Sound /></a>
        <a className='shadowfilter' href='/'> <Tweeter /> </a>
      </div>
    </ul>
  )
}

export default Side
