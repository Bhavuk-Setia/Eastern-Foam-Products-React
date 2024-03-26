import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation1 from '../components/navigation1'
import FeatureCard41 from '../components/feature-card41'
import Footer2 from '../components/footer2'
import './pu-scrap.css'

const PUScrap = (props) => {
  return (
    <div className="pu-scrap-container">
      <Helmet>
        <title>PU-scrap - Eastern Foam Products</title>
        <meta property="og:title" content="PU-scrap - Eastern Foam Products" />
      </Helmet>
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
      <div className="pu-scrap-main-page">
        <div className="pu-scrap-hero-section">
          <h1 className="pu-scrap-text">PU FOAM SCRAP</h1>
        </div>
        <div className="pu-scrap-container1">
          <img
            alt="image"
            src="/New Folder/image1-400w.png"
            className="pu-scrap-image"
          />
          <div className="pu-scrap-container2">
            <span className="pu-scrap-text01">
              PU Foam scrap refers to the waste or leftover material that is
              generated during the production or usage of Polyurethane (PU)
              Foam. Polyurethane Foam is a versatile and widely used material in
              various industries, including furniture, automotive, construction,
              and packaging.
            </span>
            <ul className="pu-scrap-ul list">
              <li className="pu-scrap-li list-item">
                <span className="pu-scrap-text02">
                  Range of density    -    15-40
                </span>
              </li>
              <li className="pu-scrap-li1 list-item">
                <span className="pu-scrap-text03">
                  Weight                      -      180-190
                </span>
              </li>
              <li className="pu-scrap-li2 list-item">
                <span className="pu-scrap-text04">
                  Loading ability      -      20-25
                </span>
              </li>
              <li className="pu-scrap-li3 list-item">
                <span className="pu-scrap-text05">
                  MOQ                          -       1*40
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pu-scrap-container3">
          <div className="pu-scrap-container4">
            <h1 className="pu-scrap-text06">Ask for Quote</h1>
            <div className="pu-scrap-container5">
              <div className="pu-scrap-container6">
                <Script
                  html={`<script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
<div class="commonninja_component pid-77f8e4c4-ce4e-45e2-8419-663e84e1d525"></div>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
        <div className="pu-scrap-features">
          <h1 className="pu-scrap-text07">
            <span>Discover our </span>
            <span>unique features</span>
          </h1>
          <div className="pu-scrap-separator"></div>
          <div className="pu-scrap-container7">
            <div className="pu-scrap-container8">
              <FeatureCard41
                title="Good Quality"
                description="Our PU foam scrap is in good condition and free of contaminants like dirt, glue, or other materials. 100% furniture off cutting, 100% dry and clean."
                rootClassName="rootClassName1"
              ></FeatureCard41>
              <FeatureCard41
                title="Material Testing"
                description="Our PU foam scrap undergoes a rigorous quality assurance procedure to ensure its usability and consistency."
                rootClassName="rootClassName4"
              ></FeatureCard41>
              <FeatureCard41
                title="Competitive Pricing"
                description="We are a competitive supplier by offering a more affordable price for our foam scrap compared to other suppliers."
                rootClassName="rootClassName3"
              ></FeatureCard41>
              <FeatureCard41
                title="Versatality"
                description="PU foam scrap can be suitable for various applications. It can be used for a range of applications such as furniture padding, insulation, soundproofing, and packaging."
                rootClassName="rootClassName2"
              ></FeatureCard41>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1522878308970-972ec5eedc0d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHx1bmlxdWV8ZW58MHx8fHwxNzExMDkxMzY0fDA&amp;ixlib=rb-4.0.3&amp;w=500"
              className="pu-scrap-image1"
            />
          </div>
        </div>
        <Footer2 rootClassName="footer2-root-class-name"></Footer2>
      </div>
    </div>
  )
}

export default PUScrap
