import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './navigation.css'

const Navigation = (props) => {
  return (
    <header
      data-role="Header"
      className={`navigation-header ${props.rootClassName} `}
    >
      <div className="navigation-max-width">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="navigation-image"
        />
        <div className="navigation-nav">
          <NavigationLinks
            link3="Products"
            rootClassName="navigation-links-root-class-name17"
            className=""
          ></NavigationLinks>
          <button className="button-secondary button button-md">
            {props.button}
          </button>
        </div>
        <div data-role="BurgerMenu" className="navigation-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navigation-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="mobile-menu">
          <div className="navigation-nav1">
            <div className="navigation-container">
              <img alt={props.imageAlt1} src={props.imageSrc1} className="" />
              <div
                data-role="CloseMobileMenu"
                className="navigation-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="navigation-icon2">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <NavigationLinks
              rootClassName="navigation-links-root-class-name18"
              className=""
            ></NavigationLinks>
            <button className="button-secondary button button-md">
              {props.button2}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  rootClassName: '',
  imageSrc: '/logo-200h.png',
  button: 'Get in touch',
  imageAlt1: 'image',
  imageSrc1: '/logo1-1500h.png',
  button2: 'Get in touch',
  imageAlt: 'logo',
}

Navigation.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  button: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  button2: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Navigation
