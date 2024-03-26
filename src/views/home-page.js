import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Navigation1 from '../components/navigation1'
import ServicesCard from '../components/services-card'
import PortofolioCard from '../components/portofolio-card'
import BlogPostCard4 from '../components/blog-post-card4'
import BlogCard from '../components/blog-card'
import Footer2 from '../components/footer2'
import './home-page.css'

const HomePage = (props) => {
  return (
    <div className="home-page-container">
      <Helmet>
        <title>Eastern Foam Products</title>
        <meta property="og:title" content="Eastern Foam Products" />
      </Helmet>
      <div className="home-page-container01">
        <Navigation rootClassName="navigation-root-class-name1"></Navigation>
        <Navigation1 rootClassName="navigation1-root-class-name3"></Navigation1>
        <main className="home-page-main">
          <div className="home-page-hero section-container">
            <div className="home-page-max-width max-content-container">
              <div className="home-page-heading-container">
                <h1 className="home-page-text">
                  SUPPLYING FOAM SCRAP AND MACHINERY
                </h1>
                <div className="home-page-container02">
                  <Link
                    to="/scrap-listing"
                    className="home-page-primary button-primary button-lg button"
                  >
                    Foam scrap and Binder
                  </Link>
                  <Link
                    to="/machine-listing"
                    className="home-page-primary1 button-primary button-lg button"
                  >
                    Foam and Mattress machinery
                  </Link>
                </div>
              </div>
              <div className="home-page-gallery">
                <div className="home-page-container03">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1641107208192-8533718119ae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3MHx8TUFDSElORXxlbnwwfHx8fDE3MTA3NDU0MDF8MA&amp;ixlib=rb-4.0.3&amp;h=1500"
                    className="home-page-image"
                  />
                </div>
                <div className="home-page-container04">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1627807452502-0c8329fc710b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxNQUNISU5FfGVufDB8fHx8MTcxMDc0NTI5M3ww&amp;ixlib=rb-4.0.3&amp;h=1500"
                    className="home-page-image1"
                  />
                  <img
                    alt="image"
                    src="/New Folder/scrap3-1500h.png"
                    className="home-page-image2"
                  />
                </div>
                <div className="home-page-container05">
                  <img
                    alt="image"
                    src="/New Folder/imagememory-1500h.png"
                    className="home-page-image3"
                  />
                  <div className="home-page-container06">
                    <img
                      alt="image"
                      src="https://images.unsplash.com/reserve/81gZijLSWfge41LgzqQ6_Moving%20Parts.JPG?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc2fHxNQUNISU5FfGVufDB8fHx8MTcxMDc0NTM3Nnww&amp;ixlib=rb-4.0.3&amp;w=1000"
                      className="home-page-image4"
                    />
                    <img
                      alt="image"
                      src="/New Folder/image1-400h.png"
                      className="home-page-image5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-page-services section-container">
            <div className="home-page-max-width1 max-content-container">
              <div className="home-page-heading-container1">
                <div className="home-page-text-container">
                  <span className="home-page-text01">our PRODUCTS</span>
                  <h2 className="Heading2">We provide a range of products</h2>
                </div>
                <div className="home-page-controls">
                  <button className="control-btn">
                    <svg viewBox="0 0 1024 1024" className="home-page-icon">
                      <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                    </svg>
                  </button>
                  <button className="control-btn">
                    <svg viewBox="0 0 1024 1024" className="home-page-icon02">
                      <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="home-page-cards-container">
                <Link to="/scrap-listing" className="home-page-navlink">
                  <ServicesCard
                    text="Foam scrap and Binder"
                    text1="foam scrap  and binder"
                    rootClassName="services-card-root-class-name"
                    className="home-page-component02"
                  ></ServicesCard>
                </Link>
                <Link to="/machine-listing" className="home-page-navlink1">
                  <ServicesCard
                    text="Foam and mattress machinery"
                    text1="machinery"
                    imageSrc="/file-document-200w.png"
                    rootClassName="services-card-root-class-name1"
                    className="home-page-component03"
                  ></ServicesCard>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-page-portofolio section-container">
            <div className="home-page-max-width2 max-content-container">
              <div className="home-page-text-container1">
                <h2 className="home-page-text03 Heading2">
                  Foam scrap and Binder
                </h2>
                <Link
                  to="/scrap-listing"
                  className="home-page-primary2 button-secondary button-lg button"
                >
                  See all products
                </Link>
              </div>
              <div className="home-page-tab-selector-cards-container">
                <Link to="/pu-scrap">
                  <PortofolioCard
                    imageSrc="/New Folder/image1-400h.png"
                    projectTitle="PU foam scrap"
                    rootClassName="portofolio-card-root-class-name1"
                    className="home-page-component04"
                  ></PortofolioCard>
                </Link>
                <PortofolioCard
                  imageSrc="/New Folder/imagememory-1500h.png"
                  projectTitle="Memory foam scrap"
                  rootClassName="portofolio-card-root-class-name2"
                ></PortofolioCard>
                <Link to="/binder">
                  <PortofolioCard
                    imageSrc="/New Folder/binder-400h.png"
                    projectTitle="PU binder"
                    rootClassName="portofolio-card-root-class-name3"
                    className="home-page-component06"
                  ></PortofolioCard>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-page-portofolio1 section-container">
            <div className="home-page-max-width3 max-content-container">
              <div className="home-page-text-container2">
                <h2 className="home-page-text04 Heading2">
                  Foam and mattress machinery
                </h2>
                <Link
                  to="/machine-listing"
                  className="home-page-primary3 button-secondary button-lg button"
                >
                  See all products
                </Link>
              </div>
              <div className="home-page-tab-selector-cards-container1">
                <Link to="/rebonded-machine">
                  <PortofolioCard
                    imageSrc="/New Folder/rebonded%20machine-400h.png"
                    projectTitle="Rebonded foam machine"
                    rootClassName="portofolio-card-root-class-name12"
                    className="home-page-component07"
                  ></PortofolioCard>
                </Link>
                <Link to="/batch-foaming">
                  <PortofolioCard
                    imageSrc="/New Folder/machine2-400h.png"
                    projectTitle="Batch foam machine"
                    rootClassName="portofolio-card-root-class-name13"
                    className="home-page-component08"
                  ></PortofolioCard>
                </Link>
                <Link to="/vertical-cutting-machine">
                  <PortofolioCard
                    imageSrc="/New Folder/vertical%20machine-400h.png"
                    projectTitle="Vertical foam cutting machine"
                    rootClassName="portofolio-card-root-class-name14"
                    className="home-page-component09"
                  ></PortofolioCard>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-page-about section-container">
            <div className="home-page-max-width4 max-content-container">
              <div className="home-page-text-container3">
                <span className="home-page-text05">about us</span>
                <h2 className="home-page-text06 Heading2">
                  <span>We supply quality</span>
                  <br></br>
                  <span>products and services</span>
                </h2>
                <span className="home-page-text10">
                  Foam scrap and machinery
                </span>
                <div className="home-page-checklist">
                  <div className="home-page-check-item">
                    <svg viewBox="0 0 1024 1024" className="home-page-icon04">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="home-page-text11">
                      Quality services and support all time
                    </span>
                  </div>
                  <div className="home-page-check-item1">
                    <svg viewBox="0 0 1024 1024" className="home-page-icon06">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="home-page-text12">
                      Long-term strategy development
                    </span>
                  </div>
                  <div className="home-page-check-item2">
                    <svg viewBox="0 0 1024 1024" className="home-page-icon08">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="home-page-text13">
                      FREE Brand Audit for startups
                    </span>
                  </div>
                  <div className="home-page-check-item3">
                    <svg viewBox="0 0 1024 1024" className="home-page-icon10">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="home-page-text14">
                      Over 10 years in the business
                    </span>
                  </div>
                  <div className="home-page-check-item4">
                    <svg viewBox="0 0 1024 1024" className="home-page-icon12">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="home-page-text15">
                      Future-Proofing Projects
                    </span>
                  </div>
                  <div className="home-page-check-item5">
                    <svg viewBox="0 0 1024 1024" className="home-page-icon14">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="home-page-text16">
                      Support in any implementation
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-page-image-container">
                <img
                  alt="image"
                  src="/rectangle%20109-1500h.png"
                  className="home-page-image6"
                />
              </div>
            </div>
          </div>
          <div className="home-page-process section-container">
            <div className="home-page-max-width5 max-content-container">
              <span className="home-page-text17">Our process</span>
              <h2 className="home-page-text18 Heading2">
                <span>
                  We use a simple three step process.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Take a look.</span>
              </h2>
              <div className="home-page-step">
                <span className="home-page-text22">01</span>
                <div className="home-page-container07">
                  <span className="home-page-text23">
                    Finding the best idea
                  </span>
                  <span className="home-page-text24">
                    There are countless businesses already in existence, so it’s
                    very likely that you won’t be the first person to think of
                    an idea or product. There are countless businesses already
                    in existence, so it’s very likely that you won’t be the
                    first person to think of an idea or product.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="home-page-step1">
                <span className="home-page-text25">02</span>
                <div className="home-page-container08">
                  <span className="home-page-text26">
                    Intense Brain storming
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-page-text27">
                    Brainstorming is a process of toiling and generating new
                    ideas alone or by holding intensive group discussions
                    between team members in a team.
                  </span>
                </div>
              </div>
              <div className="home-page-step2">
                <span className="home-page-text28">03</span>
                <div className="home-page-container09">
                  <span className="home-page-text29">
                    Strong design execution
                  </span>
                  <span className="home-page-text30">
                    As a creative, using your professional judgement, you should
                    begin filtering your various ideas and designs, retaining
                    the strongest relevant material.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-page-container10">
            <h1 className="home-page-text31">
              <span>Discover our unique features</span>
              <br></br>
            </h1>
            <div className="home-page-separator"></div>
          </div>
          <div className="home-page-container11">
            <div className="home-page-blog">
              <BlogPostCard4
                date="ROBUST SUPPLY CHAIN"
                label="--"
                imageSrc="https://images.unsplash.com/photo-1627389955646-6596047473d7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU5fHxjb25uZWN0aW9ufGVufDB8fHx8MTcxMDc5MTgwNnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                description="We have a complete supply chain. We provide customers from raw materials to finished goods which greatly saves customers time,cost and energy."
                rootClassName="rootClassName5"
              ></BlogPostCard4>
              <div className="home-page-container12">
                <BlogPostCard4
                  date="REDUCE WASTAGE"
                  label="--"
                  imageSrc="https://images.unsplash.com/photo-1606053929013-311c13f97b5f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzNHx8d2FzdGV8ZW58MHx8fHwxNzEwNzkxOTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                  description="The foaming molds designed by our professional foaming engineers can reduce the waste caused by the top and four sides."
                  rootClassName="rootClassName7"
                ></BlogPostCard4>
                <BlogPostCard4
                  date="CUSTOMER SUPPORT"
                  label="--"
                  imageSrc="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxzdXBwb3J0fGVufDB8fHx8MTcxMDc5MTY4NXww&amp;ixlib=rb-4.0.3&amp;w=1500"
                  description="Provide timely guidance to customers. Customers can give us timely feedback about the problems on the machine"
                  rootClassName="rootClassName8"
                ></BlogPostCard4>
              </div>
              <BlogPostCard4
                date="FOAMING TECHNOLOGY"
                label="--"
                imageSrc="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM2fHx0ZWNobm9sb2d5fGVufDB8fHx8MTcxMDc5MTkzOHww&amp;ixlib=rb-4.0.3&amp;w=1500"
                description="We have mature foaming technology to provide you with foaming guidance. For example, like continuous foaming machine, we can produce 7 density PU foam."
                rootClassName="rootClassName6"
              ></BlogPostCard4>
            </div>
          </div>
          <div className="home-page-blog1 section-container">
            <div className="home-page-max-width6 max-content-container">
              <h2 className="home-page-text34 Heading2">
                <span>Our latest articles and resources</span>
              </h2>
              <span className="home-page-text36">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation.
                </span>
              </span>
              <button className="home-page-primary4 button-secondary button-lg button">
                Explore the blog
              </button>
              <div className="home-page-blog-cards-container">
                <BlogCard rootClassName="blog-card-root-class-name2"></BlogCard>
                <BlogCard
                  text1="Aug 14, 2022"
                  button="advertising"
                  imageSrc="/rectangle%2099%20%5B1%5D-1500w.png"
                  rootClassName="blog-card-root-class-name3"
                ></BlogCard>
                <BlogCard
                  text1="Jul 12, 2022"
                  button="Branding"
                  imageSrc="/unsplash_h7qmwoxf6z8-1500w.png"
                ></BlogCard>
              </div>
            </div>
          </div>
        </main>
        <Footer2 rootClassName="footer2-root-class-name6"></Footer2>
      </div>
    </div>
  )
}

export default HomePage
