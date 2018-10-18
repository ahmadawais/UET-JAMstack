import React from 'react'
import 'typeface-merriweather'
// Import typefaces
import 'typeface-montserrat'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src="http://on.ahmda.ws/6e8606/c"
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Built by <strong>Ahmad Awais</strong> — A Full Stack JavaScript & Open
          Source Developer.{' '}
          <a href="https://twitter.com/mrahmadawais">
            You should follow him on Twitter →
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
