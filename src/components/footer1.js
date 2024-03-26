import React from 'react'

import PropTypes from 'prop-types'

import './footer1.css'

const Footer1 = (props) => {
  return (
    <div className={`footer1-footer section-container ${props.rootClassName} `}>
      <footer className="footer1-max-width max-content-container">
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="footer1-image"
        />
      </footer>
      <div className="max-content-container">
        <div className="footer1-top-part">
          <div className="footer1-links-container">
            <div className="footer1-product-container">
              <span className="footer1-text">{props.text1}</span>
              <span className="footer1-text01">{props.text2}</span>
              <span className="footer1-text02">{props.text3}</span>
              <span className="">{props.text4}</span>
            </div>
            <div className="footer1-navigate-container">
              <span className="footer1-text04">{props.text5}</span>
              <span className="footer1-text05">{props.text6}</span>
              <span className="footer1-text06">{props.text7}</span>
              <span className="">{props.text8}</span>
            </div>
            <div className="footer1-contact-container">
              <span className="footer1-text08">{props.text9}</span>
              <span className="footer1-text09">
                <span className="">2157 Village View</span>
                <br className=""></br>
                <span className="">
                  Drive, Old Fort
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className=""></br>
                <span className="">
                  Myers Florida
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className=""></br>
                <span className="">33901</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer1-separator"></div>
    </div>
  )
}

Footer1.defaultProps = {
  text3: 'Portofolio',
  text2: 'About',
  text9: 'Contact Us',
  text: 'Subscribe to our newsletter',
  text1: 'Product',
  button: 'Subscribe',
  text6: 'Copyrights',
  imageSrc1: '/logo-200h.png',
  imageAlt1: 'image',
  imageSrc: '723f3213-3595-4693-92cd-e38c70b84e24',
  text7: 'Sitemap',
  imageAlt: 'image',
  text4: 'Blog',
  textinputPlaceholder: 'Enter your e-mail address',
  text5: 'Navigate',
  rootClassName: '',
  text8: 'Privacy Policy',
}

Footer1.propTypes = {
  text3: PropTypes.string,
  text2: PropTypes.string,
  text9: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  text6: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
  text7: PropTypes.string,
  imageAlt: PropTypes.string,
  text4: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text5: PropTypes.string,
  rootClassName: PropTypes.string,
  text8: PropTypes.string,
}

export default Footer1
