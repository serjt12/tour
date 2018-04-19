import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'

import frontDate1 from '../images/02.png'
import backDate1 from '../images/02-2.png'
import frontDate2 from '../images/08.png'
import backDate2 from '../images/08-2.png'
import frontDate3 from '../images/09.png'
import backDate3 from '../images/09-2.png'
import frontDate4 from '../images/20.png'
import backDate4 from '../images/20-2.png'

class Dates extends Component {
  state = {isFlipped: false};

  handleClick = (e) => {
    e.preventDefault()
    this.setState({
      isFlipped: !this.state.isFlipped
    })
  }
  handleClick1 = (e) => {
    e.preventDefault()
    this.setState({
      isFlipped1: !this.state.isFlipped1
    })
  }
  handleClick2 = (e) => {
    e.preventDefault()
    this.setState({
      isFlipped2: !this.state.isFlipped2
    })
  }
  handleClick3 = (e) => {
    e.preventDefault()
    this.setState({
      isFlipped3: !this.state.isFlipped3
    })
  }
  render () {
    return (
      <div className='transition-container'>
        <section>
          <ReactCardFlip infinite isFlipped={this.state.isFlipped}>
            <div key='front' className='date1'>
              <button onClick={this.handleClick}>
                <img src={frontDate1} alt='Funk Date' />
              </button>
            </div>
            <div key='back' className='date1'>
              <button onClick={this.handleClick}>
                <img src={backDate1} alt='Funk Date' />
              </button>
            </div>
          </ReactCardFlip>
        </section>
        <section>
          <ReactCardFlip infinite isFlipped={this.state.isFlipped1}>
            <div key='front' className='date2' >
              <button onClick={this.handleClick1}>
                <img src={frontDate2} alt='Funk Date' />
              </button>
            </div>

            <div key='back' className='date2'>
              <button onClick={this.handleClick1}>
                <img src={backDate2} alt='Funk Date' />
              </button>
            </div>
          </ReactCardFlip>
        </section>
        <section>
          <ReactCardFlip infinite isFlipped={this.state.isFlipped2}>
            <div key='front' className='date3' >
              <button onClick={this.handleClick2}>
                <img src={frontDate3} alt='Funk Date' />
              </button>
            </div>

            <div key='back' className='date3'>
              <button onClick={this.handleClick2}>
                <img src={backDate3} alt='Funk Date' />
              </button>
            </div>
          </ReactCardFlip>
        </section>
        <section>
          <ReactCardFlip infinite isFlipped={this.state.isFlipped3}>
            <div key='front' className='date4' >
              <button onClick={this.handleClick3}>
                <img src={frontDate4} alt='Funk Date' />
              </button>
            </div>

            <div key='back' className='date4'>
              <button onClick={this.handleClick3}>
                <img src={backDate4} alt='Funk Date' />
              </button>
            </div>
          </ReactCardFlip>
        </section>

      </div>
    )
  }
}

export default Dates
