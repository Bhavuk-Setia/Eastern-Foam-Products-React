import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation1 from '../components/navigation1'
import GalleryCard11 from '../components/gallery-card11'
import Footer2 from '../components/footer2'
import './rebonded-machine.css'

const RebondedMachine = (props) => {
  return (
    <div className="rebonded-machine-container">
      <Helmet>
        <title>Rebonded-Machine - Eastern Foam Products</title>
        <meta
          property="og:title"
          content="Rebonded-Machine - Eastern Foam Products"
        />
      </Helmet>
      <div className="rebonded-machine-container1">
        <div className="rebonded-machine-container2">
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
          <div className="rebonded-machine-main-page">
            <div className="rebonded-machine-hero-section">
              <h1 className="rebonded-machine-text">REBONDED MACHINE</h1>
            </div>
            <div className="rebonded-machine-container3">
              <img
                alt="image"
                src="/New Folder/rebonded%20machine-600w.png"
                className="rebonded-machine-image"
              />
              <div className="rebonded-machine-container4">
                <span className="rebonded-machine-text01">
                  Rebonded foam machine is mainly used to mix the crushed foam
                  with the rebonded foam glue and then re-foam, and press it
                  into the rebonded foam with the corresponding required density
                  through the hydraulic system.
                </span>
                <div className="rebonded-machine-container5">
                  <h1 className="rebonded-machine-text02">Ask for Quote</h1>
                  <div className="rebonded-machine-container6">
                    <div className="rebonded-machine-container7">
                      <Script
                        html={`<script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
<div class="commonninja_component pid-77f8e4c4-ce4e-45e2-8419-663e84e1d525"></div>`}
                      ></Script>
                    </div>
                  </div>
                </div>
                <ul className="rebonded-machine-ul list">
                  <li className="rebonded-machine-li list-item">
                    <span className="rebonded-machine-text03">
                      Range of density    -    15-40
                    </span>
                  </li>
                  <li className="rebonded-machine-li1 list-item">
                    <span className="rebonded-machine-text04">
                      Weight                      -      180-190
                    </span>
                  </li>
                  <li className="rebonded-machine-li2 list-item">
                    <span className="rebonded-machine-text05">
                      Loading ability      -      20-25
                    </span>
                  </li>
                  <li className="rebonded-machine-li3 list-item">
                    <span className="rebonded-machine-text06">
                      MOQ                          -       1*40
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rebonded-machine-container8">
              <h1 className="rebonded-machine-text07">Product Details</h1>
              <h2 className="rebonded-machine-text08">Brief Introduction</h2>
              <span className="rebonded-machine-text09">
                Rebonded foam machine is mainly used to mix the crushed foam
                with the rebonded foam glue and then re-foam, and press it into
                the rebonded foam with the corresponding required density
                through the hydraulic system. This machine has a complete set of
                assembly line for stirring, mixing and pressure forming. It is
                the most ideal production equipment for the production of
                furniture, shoe materials, mattresses, electronics, clothing and
                foam for the automotive industry. When used with a steam boiler
                device, the production efficiency can be increased by 5 times.
              </span>
              <h2 className="rebonded-machine-text10">
                Overview of the product
              </h2>
              <span className="rebonded-machine-text11">
                Rebonded foam machine line consists of the following parts:
              </span>
              <ul className="list">
                <li className="list-item">
                  <span className="rebonded-machine-text12">
                    <span>Foam crushing machine</span>
                    <br></br>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="rebonded-machine-text16">
                    <span className="rebonded-machine-text17">Mixing tank</span>
                    <br className="rebonded-machine-text18"></br>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="rebonded-machine-text20">
                    <span>Controller</span>
                    <br></br>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="rebonded-machine-text24">
                    <span>Mold</span>
                    <br></br>
                  </span>
                </li>
              </ul>
              <div className="rebonded-machine-gallery">
                <GalleryCard11
                  imageSrc="/New Folder/foaming%201-1500h.png"
                  rootClassName="rootClassName2"
                ></GalleryCard11>
                <GalleryCard11
                  imageSrc="/New Folder/foaming2-1500h.png"
                  rootClassName="rootClassName3"
                ></GalleryCard11>
              </div>
            </div>
            <div className="rebonded-machine-features">
              <h1 className="rebonded-machine-text27">
                <span>Discover our </span>
                <span>unique features</span>
              </h1>
              <div className="rebonded-machine-separator"></div>
              <img
                alt="image"
                src="/New Folder/feature%20rebonded-300h.png"
                className="rebonded-machine-image1"
              />
            </div>
            <Footer2 rootClassName="footer2-root-class-name1"></Footer2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RebondedMachine
