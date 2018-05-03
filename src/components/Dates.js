import React, { Component } from 'react'

import frontDate1 from '../images/02.png'
import backDate1 from '../images/02-2.png'
import frontDate2 from '../images/08.png'
import backDate2 from '../images/08-2.png'
import frontDate3 from '../images/09.png'
import backDate3 from '../images/09-2.png'
import frontDate4 from '../images/20.png'
import backDate4 from '../images/20-2.png'

class Dates extends Component {
  render () {
    return (
      <div className='dates-container'>
        <div>
          <img alt='date 1' src={frontDate1} />
          <img alt='back 1' src={backDate1} />
        </div>
        <div>
          <img alt='date 2' src={frontDate2} />
          <img alt='back 2' src={backDate2} />
        </div>
        <div>
          <img alt='date 3' src={frontDate3} />
          <img alt='back 3' src={backDate3} />
        </div>
        <div>
          <img alt='date 4' src={frontDate4} />
          <img alt='back 4' src={backDate4} />
        </div>
      </div>
    )
  }
}

export default Dates
