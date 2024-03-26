import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card15.css'

const GalleryCard15 = (props) => {
  return (
    <div className={`gallery-card15-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="gallery-card15-image"
      />
      <h2 className="gallery-card15-text">{props.title}</h2>
      <span className="gallery-card15-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard15.defaultProps = {
  subtitle: 'Lorem ipsum dolor sit amet',
  imageSrc:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  rootClassName: '',
  imageAlt: 'image',
  title: 'Project Title',
}

GalleryCard15.propTypes = {
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard15
