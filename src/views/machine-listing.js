import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navigation1 from '../components/navigation1'
import GalleryCard15 from '../components/gallery-card15'
import Footer2 from '../components/footer2'
import './machine-listing.css'

const MachineListing = (props) => {
  return (
    <div className="machine-listing-container">
      <Helmet>
        <title>Machine-listing - Eastern Foam Products</title>
        <meta
          property="og:title"
          content="Machine-listing - Eastern Foam Products"
        />
      </Helmet>
      <Navigation1 rootClassName="navigation1-root-class-name1"></Navigation1>
      <div className="machine-listing-main">
        <div className="machine-listing-hero-section">
          <h1 className="machine-listing-text">Foam and mattress machinery</h1>
        </div>
        <div className="machine-listing-container1">
          <h1 className="machine-listing-text1">
            Explore our range of products
          </h1>
        </div>
        <div className="machine-listing-container2">
          <div className="machine-listing-container3">
            <div className="machine-listing-sidebar">
              <div className="machine-listing-nav-item">
                <span className="machine-listing-text2">Foam SCRAP</span>
                <div className="machine-listing-options">
                  <Link to="/pu-scrap" className="machine-listing-navlink">
                    PU Foam scrap
                  </Link>
                  <Link to="/memory-scrap" className="machine-listing-navlink1">
                    Memory Foam scrap
                  </Link>
                </div>
              </div>
              <div className="machine-listing-nav-item1">
                <span className="machine-listing-text3">Binder</span>
                <div className="machine-listing-options1">
                  <Link to="/binder" className="machine-listing-navlink2">
                    PU Binder
                  </Link>
                </div>
              </div>
              <div className="machine-listing-nav-item2">
                <span className="machine-listing-text4">Machinery</span>
                <div className="machine-listing-options2">
                  <Link
                    to="/machine-listing"
                    className="machine-listing-navlink3"
                  >
                    Foam machinery
                  </Link>
                  <Link
                    to="/machine-listing"
                    className="machine-listing-navlink4"
                  >
                    Mattress machinery
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="machine-listing-container4">
            <div className="machine-listing-gallery">
              <Link to="/batch-foaming">
                <GalleryCard15
                  title="Batch foaming"
                  imageSrc="/New Folder/machine2-1500h.png"
                  subtitle="Machine"
                  rootClassName="rootClassName"
                  className="machine-listing-component1"
                ></GalleryCard15>
              </Link>
              <Link to="/horizontal-foam-cutting">
                <GalleryCard15
                  title="Horizontal cutting"
                  imageSrc="/New Folder/horizontal%20foam%20cutting-1500w.png"
                  subtitle="Machine"
                  rootClassName="rootClassName1"
                  className="machine-listing-component2"
                ></GalleryCard15>
              </Link>
              <Link to="/vertical-cutting-machine">
                <GalleryCard15
                  title="Vertical cutting"
                  imageSrc="/New Folder/vertical%20machine-1500w.png"
                  subtitle="Machine"
                  rootClassName="rootClassName2"
                  className="machine-listing-component3"
                ></GalleryCard15>
              </Link>
              <Link to="/rebonded-machine">
                <GalleryCard15
                  title="Rebonded foam"
                  imageSrc="/New Folder/rebonded%20machine-1500w.png"
                  subtitle="Machine"
                  rootClassName="rootClassName3"
                  className="machine-listing-component4"
                ></GalleryCard15>
              </Link>
            </div>
          </div>
        </div>
        <Footer2></Footer2>
      </div>
    </div>
  )
}

export default MachineListing
