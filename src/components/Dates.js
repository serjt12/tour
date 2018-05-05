import React, { Component } from 'react'

import frontDate1 from '../images/02.png'
import frontDate2 from '../images/08.png'
import frontDate3 from '../images/09.png'
import frontDate4 from '../images/21.png'

class Dates extends Component {
  render () {
    return (
      <div className='dates-container'>
        <div>
          <img alt='date 1' src={frontDate1} />
        </div>
        <div>
          <img alt='date 2' src={frontDate2} />
        </div>
        <div>
          <img alt='date 3' src={frontDate3} />
        </div>
        <div>
          <img alt='date 4' src={frontDate4} />
        </div>
      </div>
    )
  }
}

export default Dates
