import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavigationLinks1 from './navigation-links1'
import './navigation1.css'

const Navigation1 = (props) => {
  return (
    <header
      data-role="Header"
      className={`navigation1-header ${props.rootClassName} `}
    >
      <div className="navigation1-max-width">
        <Link to="/" className="navigation1-navlink">
          <h2 className="navigation1-text">{props.heading}</h2>
        </Link>
        <div className="navigation1-nav">
          <NavigationLinks1
            link3="Products"
            rootClassName="navigation-links1-root-class-name17"
            className=""
          ></NavigationLinks1>
          <a
            href="#footer main"
            className="navigation1-register button-secondary button button-md"
          >
            {props.button}
          </a>
        </div>
        <div data-role="BurgerMenu" className="navigation1-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navigation1-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="mobile-menu">
          <div className="navigation1-nav1">
            <div className="navigation1-container">
              <img alt={props.imageAlt1} src={props.imageSrc1} className="" />
              <div
                data-role="CloseMobileMenu"
                className="navigation1-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="navigation1-icon2">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <NavigationLinks1
              rootClassName="navigation-links1-root-class-name18"
              className=""
            ></NavigationLinks1>
            <button className="button-secondary button button-md">
              {props.button2}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

Navigation1.defaultProps = {
  imageAlt: 'logo',
  button2: 'Get in touch',
  button: 'Get in touch',
  imageSrc1: '/external/logo1-1500h-1500h.png',
  imageSrc: '1ee5fdde-11d4-4966-b5dc-fd9915cb32b1',
  rootClassName: '',
  text: 'Text',
  imageAlt1: 'image',
  heading: 'EASTERN     FOAM     PRODUCTS',
}

Navigation1.propTypes = {
  imageAlt: PropTypes.string,
  button2: PropTypes.string,
  button: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  imageAlt1: PropTypes.string,
  heading: PropTypes.string,
}

export default Navigation1
