import React from 'react'

import PropTypes from 'prop-types'

import './footer2.css'

const Footer2 = (props) => {
  return (
    <div
      id="footer main"
      className={`footer2-footer section-container ${props.rootClassName} `}
    >
      <div className="max-content-container">
        <div className="footer2-top-part">
          <div className="footer2-links-container">
            <div className="footer2-product-container">
              <span className="footer2-text">{props.text}</span>
              <span className="footer2-text01">{props.text1}</span>
              <span className="footer2-text02">{props.text2}</span>
              <span className="">{props.text3}</span>
            </div>
            <div className="footer2-navigate-container">
              <span className="footer2-text04">{props.text4}</span>
              <span className="footer2-text05">{props.text5}</span>
              <span className="footer2-text06">{props.text6}</span>
              <span className="">{props.text7}</span>
            </div>
            <div className="footer2-contact-container">
              <span className="footer2-text08">{props.text8}</span>
              <span className="footer2-text09">
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
      <div className="footer2-separator"></div>
      <footer className="footer2-max-width1 max-content-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="footer2-image"
        />
      </footer>
    </div>
  )
}

Footer2.defaultProps = {
  imageSrc: '/logo-600h.png',
  text4: 'Navigate',
  text6: 'Sitemap',
  rootClassName: '',
  imageAlt: 'image',
  text3: 'Blog',
  text8: 'Contact Us',
  text5: 'Copyrights',
  text7: 'Privacy Policy',
  text: 'Product',
  text1: 'About',
  text2: 'Portofolio',
}

Footer2.propTypes = {
  imageSrc: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  text3: PropTypes.string,
  text8: PropTypes.string,
  text5: PropTypes.string,
  text7: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default Footer2
