import React, { Component } from 'react'
import Title from '../images/tour-title.png'
import Afro from '../images/afro.png'

import frontDate1 from '../images/02.png'
import frontDate2 from '../images/08.png'
import frontDate3 from '../images/09.png'
import frontDate4 from '../images/21.png'
/**
 * TourDates
 */
class TourDates extends Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className='dates-desk'>
        <div className='left-side'>
          <img className='tour-title-desk' src={Title} alt='Tour Dates' />
          <img className='afro' src={Afro} alt='Tour Afro' />
        </div>
        <div className='right-side'>
          <div>
            <img alt='date 1' src={frontDate1} />

          </div>
          <div>
            <img alt='date 2'src={frontDate2} />
          </div>
          <div>
            <img alt='date 3' src={frontDate3} />
          </div>
          <div>
            <img alt='date 4' src={frontDate4} />
          </div>
        </div>
      </div>
    )
  }
}

export default TourDates
