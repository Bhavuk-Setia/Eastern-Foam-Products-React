import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links1-navlink Navigation-Link">
        {props.link1}
      </Link>
      <Link to="/" className="navigation-links1-navlink1 Navigation-Link">
        {props.link3}
      </Link>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  link3: 'Portofolio',
  link2: 'About',
  link1: 'Home',
  rootClassName: '',
  link4: 'Blog',
}

NavigationLinks1.propTypes = {
  link3: PropTypes.string,
  link2: PropTypes.string,
  link1: PropTypes.string,
  rootClassName: PropTypes.string,
  link4: PropTypes.string,
}

export default NavigationLinks1
