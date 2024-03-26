import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation1 from '../components/navigation1'
import GalleryCard11 from '../components/gallery-card11'
import Footer1 from '../components/footer1'
import './batch-foaming.css'

const BatchFoaming = (props) => {
  return (
    <div className="batch-foaming-container">
      <Helmet>
        <title>Batch-foaming - Eastern Foam Products</title>
        <meta
          property="og:title"
          content="Batch-foaming - Eastern Foam Products"
        />
      </Helmet>
      <div className="batch-foaming-container1">
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
        <div className="batch-foaming-main-page">
          <div className="batch-foaming-hero-section">
            <h1 className="batch-foaming-text">Batch foaming machine</h1>
          </div>
          <div className="batch-foaming-container2">
            <img
              alt="image"
              src="/New Folder/machine2-700h.png"
              className="batch-foaming-image"
            />
            <div className="batch-foaming-container3">
              <span className="batch-foaming-text01">
                Batch foam machine is used for mixing, stirring and foaming of
                foam raw materials. It is the supporting equipment for small
                batch production of foam.
              </span>
              <div className="batch-foaming-container4">
                <h1 className="batch-foaming-text02">Ask for Quote</h1>
                <div className="batch-foaming-container5">
                  <div className="batch-foaming-container6">
                    <Script
                      html={`<script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
<div class="commonninja_component pid-77f8e4c4-ce4e-45e2-8419-663e84e1d525"></div>`}
                    ></Script>
                  </div>
                </div>
              </div>
              <ul className="batch-foaming-ul list">
                <li className="batch-foaming-li list-item">
                  <span className="batch-foaming-text03">
                    Range of density    -    15-40
                  </span>
                </li>
                <li className="batch-foaming-li1 list-item">
                  <span className="batch-foaming-text04">
                    Weight                      -      180-190
                  </span>
                </li>
                <li className="batch-foaming-li2 list-item">
                  <span className="batch-foaming-text05">
                    Loading ability      -      20-25
                  </span>
                </li>
                <li className="batch-foaming-li3 list-item">
                  <span className="batch-foaming-text06">
                    MOQ                          -       1*40
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="batch-foaming-container7">
            <h1 className="batch-foaming-text07">Product Details</h1>
            <h2 className="batch-foaming-text08">Brief Introduction</h2>
            <span className="batch-foaming-text09">
              Batch foam machine is used for mixing, stirring and foaming of
              foam raw materials. It adopts frequency conversion speed
              regulation control device. The raw materials in the foaming barrel
              are stirred by the high-speed rotating blades to make them fully
              mixed to produce a complete chemical reaction, then will be
              immediately poured into the mold and foamed into finished foam
              blocks. The high-speed section of the machine is equipped with
              timing automatic control function and automatic electronic brake
              device, which makes the machine have the advantages of high-speed
              frequency conversion, easy operation and better foaming quality.
              It is the supporting equipment for small batch production of foam.
            </span>
            <h2 className="batch-foaming-text10">Overview of the product</h2>
            <span className="batch-foaming-text11">
              <span className="batch-foaming-text12">
                Batch foam machine consists of three parts:
              </span>
              <br className="batch-foaming-text13"></br>
            </span>
            <ul className="list">
              <li className="list-item">
                <span className="batch-foaming-text14">
                  <span>Material tank</span>
                  <br></br>
                  <br></br>
                </span>
              </li>
              <li className="list-item">
                <span className="batch-foaming-text18">
                  <span className="batch-foaming-text19">Mixing head</span>
                  <br className="batch-foaming-text20"></br>
                  <br></br>
                </span>
              </li>
              <li className="list-item">
                <span className="batch-foaming-text22">
                  Mold(Cylinder/Square mold)
                </span>
              </li>
            </ul>
            <div className="batch-foaming-gallery">
              <GalleryCard11
                imageSrc="/New Folder/foaming%201-1500h.png"
                rootClassName="rootClassName"
              ></GalleryCard11>
              <GalleryCard11
                imageSrc="/New Folder/foaming2-1500h.png"
                rootClassName="rootClassName1"
              ></GalleryCard11>
            </div>
          </div>
          <div className="batch-foaming-features">
            <h1 className="batch-foaming-text23">
              <span>Discover our </span>
              <span>unique features</span>
            </h1>
            <div className="batch-foaming-separator"></div>
            <img
              alt="image"
              src="/New Folder/test1234-500h.png"
              className="batch-foaming-image1"
            />
          </div>
          <Footer1 rootClassName="footer1-root-class-name1"></Footer1>
        </div>
      </div>
    </div>
  )
}

export default BatchFoaming
