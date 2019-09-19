import React, { Component } from 'react'
import './NoMatch.css'
import { Link } from 'react-router-dom'

export default class NoMatch extends Component {
  render() {
    return (
      <div className='error-body'>
          <section class="error-container">
            <span class="four"><span class="screen-reader-text">4</span></span>
            <span class="zero"><span class="screen-reader-text">0</span></span>
            <span class="four"><span class="screen-reader-text">4</span></span>
          </section>
          <div class="link-container">
           <Link to="/" class="more-link">Go Back</Link>
          </div>
      </div>
    )
  }
}
