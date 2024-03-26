import React from 'react'

import PropTypes from 'prop-types'

import './hero-section.css'

const HeroSection = (props) => {
  return (
    <div className="hero-section-hero-section">
      <h1 className="hero-section-text">{props.heading}</h1>
    </div>
  )
}

HeroSection.defaultProps = {
  heading: 'PU FOAM SCRAP',
}

HeroSection.propTypes = {
  heading: PropTypes.string,
}

export default HeroSection
