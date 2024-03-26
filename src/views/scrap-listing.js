import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navigation1 from '../components/navigation1'
import GalleryCard14 from '../components/gallery-card14'
import Footer2 from '../components/footer2'
import './scrap-listing.css'

const ScrapListing = (props) => {
  return (
    <div className="scrap-listing-container">
      <Helmet>
        <title>Scrap-listing - Eastern Foam Products</title>
        <meta
          property="og:title"
          content="Scrap-listing - Eastern Foam Products"
        />
      </Helmet>
      <Navigation1 rootClassName="navigation1-root-class-name2"></Navigation1>
      <div className="scrap-listing-main">
        <div className="scrap-listing-hero-section">
          <h1 className="scrap-listing-text">FOAM SCRAP AND BINDER</h1>
        </div>
        <div className="scrap-listing-container1">
          <h1 className="scrap-listing-text1">Explore our range of products</h1>
        </div>
        <div className="scrap-listing-container2">
          <div className="scrap-listing-container3">
            <div className="scrap-listing-sidebar">
              <div className="scrap-listing-nav-item">
                <span className="scrap-listing-text2">Foam SCRAP</span>
                <div className="scrap-listing-options">
                  <Link to="/pu-scrap" className="scrap-listing-navlink">
                    PU Foam scrap
                  </Link>
                  <Link to="/memory-scrap" className="scrap-listing-navlink1">
                    Memory Foam scrap
                  </Link>
                </div>
              </div>
              <div className="scrap-listing-nav-item1">
                <span className="scrap-listing-text3">Binder</span>
                <div className="scrap-listing-options1">
                  <Link to="/binder" className="scrap-listing-navlink2">
                    PU Binder
                  </Link>
                </div>
              </div>
              <div className="scrap-listing-nav-item2">
                <span className="scrap-listing-text4">Machinery</span>
                <div className="scrap-listing-options2">
                  <Link
                    to="/machine-listing"
                    className="scrap-listing-navlink3"
                  >
                    Foam machinery
                  </Link>
                  <Link
                    to="/machine-listing"
                    className="scrap-listing-navlink4"
                  >
                    Mattress machinery
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="scrap-listing-container4">
            <div className="scrap-listing-gallery">
              <Link to="/pu-scrap">
                <GalleryCard14
                  title="PU foam scrap"
                  imageSrc="/New Folder/image1-1500w.png"
                  subtitle="Scrap"
                  rootClassName="rootClassName"
                  className="scrap-listing-component1"
                ></GalleryCard14>
              </Link>
              <Link to="/memory-scrap">
                <GalleryCard14
                  title="Memory foam scrap"
                  imageSrc="/New Folder/imagememory-1500h.png"
                  subtitle="Scrap"
                  rootClassName="rootClassName1"
                  className="scrap-listing-component2"
                ></GalleryCard14>
              </Link>
              <Link to="/binder">
                <GalleryCard14
                  title="PU binder"
                  imageSrc="/New Folder/binder-1500h.png"
                  subtitle="Binder"
                  rootClassName="rootClassName2"
                  className="scrap-listing-component3"
                ></GalleryCard14>
              </Link>
            </div>
          </div>
        </div>
        <Footer2 rootClassName="footer2-root-class-name7"></Footer2>
      </div>
    </div>
  )
}

export default ScrapListing
