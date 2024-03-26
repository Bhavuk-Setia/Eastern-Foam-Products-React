import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation1 from '../components/navigation1'
import FeatureCard41 from '../components/feature-card41'
import Footer2 from '../components/footer2'
import './memory-scrap.css'

const MemoryScrap = (props) => {
  return (
    <div className="memory-scrap-container">
      <Helmet>
        <title>Memory-Scrap - Eastern Foam Products</title>
        <meta
          property="og:title"
          content="Memory-Scrap - Eastern Foam Products"
        />
      </Helmet>
      <div className="memory-scrap-container01">
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
        <div className="memory-scrap-main-page">
          <div className="memory-scrap-hero-section">
            <h1 className="memory-scrap-text">MEMORY FOAM SCRAP</h1>
          </div>
          <div className="memory-scrap-container02">
            <img
              alt="image"
              src="/New Folder/imagememory-400h.png"
              className="memory-scrap-image"
            />
            <div className="memory-scrap-container03">
              <span className="memory-scrap-text01">
                <span className="memory-scrap-text02">
                  Memory foam scrap refers to the leftover or waste material
                  produced during the manufacturing process of memory foam
                  products such as mattresses, pillows, and cushions.
                </span>
                <br></br>
                <br></br>
              </span>
              <ul className="memory-scrap-ul list">
                <li className="memory-scrap-li list-item">
                  <span className="memory-scrap-text05">
                    Range of density    -    40-50
                  </span>
                </li>
                <li className="memory-scrap-li1 list-item">
                  <span className="memory-scrap-text06">
                    Weight                      -      600-630kgs/bale
                  </span>
                </li>
                <li className="memory-scrap-li2 list-item">
                  <span className="memory-scrap-text07">
                    Loading ability      -      21-23tons/40HQ
                  </span>
                </li>
                <li className="memory-scrap-li3 list-item">
                  <span className="memory-scrap-text08">
                    MOQ                          -       1*40
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="memory-scrap-container04">
            <div className="memory-scrap-container05">
              <h1 className="memory-scrap-text09">Ask for Quote</h1>
              <div className="memory-scrap-container06">
                <div className="memory-scrap-container07">
                  <Script
                    html={`<script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
<div class="commonninja_component pid-77f8e4c4-ce4e-45e2-8419-663e84e1d525"></div>`}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
          <div className="memory-scrap-features">
            <h1 className="memory-scrap-text10">
              <span>Discover our </span>
              <span>unique features</span>
            </h1>
            <div className="memory-scrap-separator"></div>
            <div className="memory-scrap-container08">
              <div className="memory-scrap-container09">
                <FeatureCard41
                  title="Good Quality"
                  description="Our Memory foam scrap is in good condition and free of contaminants like dirt, glue, or other materials. 100% furniture off cutting, 100% dry and clean."
                  rootClassName="rootClassName9"
                ></FeatureCard41>
                <FeatureCard41
                  title="Material Testing"
                  description="Our Memory foam scrap undergoes a rigorous quality assurance procedure to ensure its usability and consistency."
                  rootClassName="rootClassName10"
                ></FeatureCard41>
                <FeatureCard41
                  title="Competitive Pricing"
                  description="We are a competitive supplier by offering a more affordable price for our foam scrap compared to other suppliers."
                  rootClassName="rootClassName11"
                ></FeatureCard41>
                <FeatureCard41
                  title="Versatality"
                  description="Memory foam scrap can be suitable for various applications. It can be used for a range of applications such as furniture padding, insulation, soundproofing, and packaging."
                  rootClassName="rootClassName12"
                ></FeatureCard41>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1522878308970-972ec5eedc0d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHx1bmlxdWV8ZW58MHx8fHwxNzExMDkxMzY0fDA&amp;ixlib=rb-4.0.3&amp;w=500"
                className="memory-scrap-image1"
              />
            </div>
          </div>
          <Footer2 rootClassName="footer2-root-class-name3"></Footer2>
        </div>
      </div>
    </div>
  )
}

export default MemoryScrap
