import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation1 from '../components/navigation1'
import Footer2 from '../components/footer2'
import './horizontal-foam-cutting.css'

const HorizontalFoamCutting = (props) => {
  return (
    <div className="horizontal-foam-cutting-container">
      <Helmet>
        <title>Horizontal-foam-cutting - Eastern Foam Products</title>
        <meta
          property="og:title"
          content="Horizontal-foam-cutting - Eastern Foam Products"
        />
      </Helmet>
      <div className="horizontal-foam-cutting-container1">
        <div className="horizontal-foam-cutting-container2">
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
          <div className="horizontal-foam-cutting-main-page">
            <div className="horizontal-foam-cutting-hero-section">
              <h1 className="horizontal-foam-cutting-text">
                HORIZONTAL FOAM CUTTING MACHINE
              </h1>
            </div>
            <div className="horizontal-foam-cutting-container3">
              <img
                alt="image"
                src="/New Folder/horizontal%20foam%20cutting-700h.png"
                className="horizontal-foam-cutting-image"
              />
              <div className="horizontal-foam-cutting-container4">
                <span className="horizontal-foam-cutting-text01">
                  Horizontal foam cutting machine is mainly used to cut block
                  foam into thin slices.
                </span>
                <div className="horizontal-foam-cutting-container5">
                  <h1 className="horizontal-foam-cutting-text02">
                    Ask for Quote
                  </h1>
                  <div className="horizontal-foam-cutting-container6">
                    <div className="horizontal-foam-cutting-container7">
                      <Script
                        html={`<script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
<div class="commonninja_component pid-77f8e4c4-ce4e-45e2-8419-663e84e1d525"></div>`}
                      ></Script>
                    </div>
                  </div>
                </div>
                <ul className="horizontal-foam-cutting-ul list">
                  <li className="horizontal-foam-cutting-li list-item">
                    <span className="horizontal-foam-cutting-text03">
                      Range of density    -    15-40
                    </span>
                  </li>
                  <li className="horizontal-foam-cutting-li1 list-item">
                    <span className="horizontal-foam-cutting-text04">
                      Weight                      -      180-190
                    </span>
                  </li>
                  <li className="horizontal-foam-cutting-li2 list-item">
                    <span className="horizontal-foam-cutting-text05">
                      Loading ability      -      20-25
                    </span>
                  </li>
                  <li className="horizontal-foam-cutting-li3 list-item">
                    <span className="horizontal-foam-cutting-text06">
                      MOQ                          -       1*40
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="horizontal-foam-cutting-container8">
              <h1 className="horizontal-foam-cutting-text07">
                Product Details
              </h1>
              <h2 className="horizontal-foam-cutting-text08">
                Brief Introduction
              </h2>
              <span className="horizontal-foam-cutting-text09">
                Horizontal foam cutting machine is mainly used to cut block foam
                into thin slices. The working table adopts automatic digital
                control, according to the thickness of the cutting and the
                density of the foam. The cutting value is set through the
                control box, and the working table moves back and forth
                automatically. When cutting thick foam, you can add a roller on
                top in order to prevent the cut foam from slipping.
              </span>
              <h2 className="horizontal-foam-cutting-text10">
                Overview of the product
              </h2>
              <span className="horizontal-foam-cutting-text11">
                <span>
                  Horizontal foam cutting machine consists of the following
                  parts:
                </span>
                <br className="horizontal-foam-cutting-text13"></br>
              </span>
              <ul className="list">
                <li className="list-item">
                  <span className="horizontal-foam-cutting-text14">
                    <span>
                      It consists of four parts: machine base, blade belt rack,
                      workbench, and electric control box.
                    </span>
                    <br className="horizontal-foam-cutting-text16"></br>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="horizontal-foam-cutting-text18">
                    <span className="horizontal-foam-cutting-text19">
                      It consists of four parts: machine base, blade belt rack,
                      workbench, and electric control box.
                    </span>
                    <br className="horizontal-foam-cutting-text20"></br>
                    <br className="horizontal-foam-cutting-text21"></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="horizontal-foam-cutting-text22">
                    <span>
                      The base is composed of a base, a column, a sliding
                      sleeve, a screw and its nut, a beam, and a lifting drive
                      mechanism.
                    </span>
                    <br className="horizontal-foam-cutting-text24"></br>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="horizontal-foam-cutting-text26">
                    <span>
                      The blade belt rack is composed of a blade holder, a blade
                      belt wheel and its driving device, a blade belt, a blade
                      box, an inclination adjustment mechanism, and a protective
                      cover.
                    </span>
                    <br className="horizontal-foam-cutting-text28"></br>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="horizontal-foam-cutting-text30">
                    <span>
                      The workbench is composed of platform, guide wheel, guide
                      rail, support, platform driving device, buffer device and
                      so on.
                    </span>
                    <br className="horizontal-foam-cutting-text32"></br>
                    <br></br>
                  </span>
                </li>
              </ul>
            </div>
            <div className="horizontal-foam-cutting-features">
              <h1 className="horizontal-foam-cutting-text34">
                <span>Discover our </span>
                <span>unique features</span>
              </h1>
              <div className="horizontal-foam-cutting-separator"></div>
              <img
                alt="image"
                src="/New Folder/feature%20horizontal-400h.png"
                className="horizontal-foam-cutting-image1"
              />
            </div>
            <Footer2 rootClassName="footer2-root-class-name2"></Footer2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HorizontalFoamCutting
