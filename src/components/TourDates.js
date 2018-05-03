import React, { Component } from 'react'
import Title from '../images/tour-title.png'
import Afro from '../images/afro.png'
import ReactCardFlip from 'react-card-flip'

import frontDate1 from '../images/02.png'
import backDate1 from '../images/02-2.png'
import frontDate2 from '../images/08.png'
import backDate2 from '../images/08-2.png'
import frontDate3 from '../images/09.png'
import backDate3 from '../images/09-2.png'
import frontDate4 from '../images/20.png'
import backDate4 from '../images/20-2.png'
/**
 * TourDates
 */
class TourDates extends Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className='dates-desk'>
        <div className='left-side'>
          <img className='tour-title-desk' src={Title} alt='Tour Dates' />
          <img className='afro' src={Afro} alt='Tour Dates' />
        </div>
        <div className='right-side'>
          <div>
            <img src={frontDate1} />
            <img src={backDate1} />
          </div>
          <div>
            <img src={frontDate2} />
            <img src={backDate2} />
          </div>
          <div>
            <img src={frontDate3} />
            <img src={backDate3} />
          </div>
          <div>
            <img src={frontDate4} />
            <img src={backDate4} />
          </div>
        </div>
      </div>
    )
  }
}

export default TourDates
