import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation1 from '../components/navigation1'
import Footer2 from '../components/footer2'
import './binder.css'

const Binder = (props) => {
  return (
    <div className="binder-container">
      <Helmet>
        <title>Binder - Eastern Foam Products</title>
        <meta property="og:title" content="Binder - Eastern Foam Products" />
      </Helmet>
      <div className="binder-container1">
        <Navigation1></Navigation1>
        <button type="button" className="button">
          Button
        </button>
        <span>
          <DateTimePrimitive
            format="DD/MM/YYYY"
            date="Mon Mar 18 2024 12:21:44 GMT+0530 (India Standard Time)"
          ></DateTimePrimitive>
        </span>
        <div className="binder-main-page">
          <div className="binder-hero-section">
            <h1 className="binder-text">
              <span>PU BINDER</span>
              <br></br>
            </h1>
          </div>
          <div className="binder-container2">
            <img
              alt="image"
              src="/New Folder/binder-400h.png"
              className="binder-image"
            />
            <div className="binder-container3">
              <span className="binder-text03">
                <span>
                  PU binder is based on MDI, a mixture of polyol modified
                  diphenyl methane diisocyanate and polyphenyl methane
                  polyisocyanate. It is a light brown liquid at room
                  temperature. Mainly used in the production of rebonded foam.
                  For soft polyurethane foam sheets, which have a strong
                  adhesive force, this adhesive is produced to create a range of
                  densities of soft polyurethane foam. Fast curing speed,
                  non-toxic, easy to operate, economic, through the SGS
                  certification.
                </span>
                <br></br>
                <br></br>
                <span>Our PU binder is with the following features:</span>
                <br></br>
                <br></br>
                <span>
                  High bonding strength: Ensures the rebonded foam remains
                  intact even after repeated use.
                </span>
                <br></br>
                <span>
                  Low viscosity: Can penetrate the foam pores easily and create
                  a strong bond.
                </span>
                <br></br>
                <span>
                  Fast curing time: Helps in reducing the production time of the
                  rebonded foam.
                </span>
                <br></br>
                <span>
                  High resilience: Enhances the resilience of the rebonded foam,
                  making it more durable and long-lasting.
                </span>
                <br></br>
                <span>
                  Low odor: Has a low odor that makes it safe and comfortable to
                  work with.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="binder-container4">
            <div className="binder-container5">
              <h1 className="binder-text20">Ask for Quote</h1>
              <div className="binder-container6">
                <div className="binder-container7">
                  <Script
                    html={`<script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
<div class="commonninja_component pid-77f8e4c4-ce4e-45e2-8419-663e84e1d525"></div>`}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
          <div className="binder-features">
            <h1 className="binder-text21">
              <span>Discover our </span>
              <span>unique features</span>
            </h1>
            <div className="binder-separator"></div>
            <div className="binder-container8">
              <img
                alt="image"
                src="/binder%20feature-600h.png"
                className="binder-image1"
              />
            </div>
          </div>
          <Footer2 rootClassName="footer2-root-class-name5"></Footer2>
        </div>
      </div>
    </div>
  )
}

export default Binder
