import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'
import PortofolioCard from '../components/portofolio-card'
import BlogPostCard4 from '../components/blog-post-card4'
import BlogCard from '../components/blog-card'
import Footer1 from '../components/footer1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - Eastern Foam Products</title>
        <meta property="og:title" content="Home - Eastern Foam Products" />
      </Helmet>
      <Navigation rootClassName="navigation-root-class-name"></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text">SUPPLYING FOAM SCRAP AND MACHINERY</h1>
              <span className="home-text01">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </span>
                <br></br>
                <span>
                  {' '}
                  tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </span>
              <div className="home-container01">
                <Link
                  to="/"
                  className="home-primary button-primary button-lg button"
                >
                  Foam scrap and Binder
                </Link>
                <button className="home-primary1 button-primary button-lg button">
                  Foam and Mattress machinery
                </button>
              </div>
            </div>
            <div className="home-gallery">
              <div className="home-container02">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1641107208192-8533718119ae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3MHx8TUFDSElORXxlbnwwfHx8fDE3MTA3NDU0MDF8MA&amp;ixlib=rb-4.0.3&amp;w=1000"
                  className="home-image"
                />
              </div>
              <div className="home-container03">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1627807452502-0c8329fc710b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxNQUNISU5FfGVufDB8fHx8MTcxMDc0NTI5M3ww&amp;ixlib=rb-4.0.3&amp;w=1000"
                  className="home-image1"
                />
                <img
                  alt="image"
                  src="/New Folder/scrap3-1000w.png"
                  className="home-image2"
                />
              </div>
              <div className="home-container04">
                <img
                  alt="image"
                  src="/New Folder/imagememory-1000w.png"
                  className="home-image3"
                />
                <div className="home-container05">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/reserve/81gZijLSWfge41LgzqQ6_Moving%20Parts.JPG?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc2fHxNQUNISU5FfGVufDB8fHx8MTcxMDc0NTM3Nnww&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="home-image4"
                  />
                  <img
                    alt="image"
                    src="/New Folder/image1-1000w.png"
                    className="home-image5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-services section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container1">
              <div className="home-text-container">
                <span className="home-text05">our PRODUCTS</span>
                <h2 className="Heading2">We provide a range of products</h2>
              </div>
              <div className="home-controls">
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                  </svg>
                </button>
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="home-cards-container">
              <ServicesCard text="Foam scrap and Binder"></ServicesCard>
              <ServicesCard
                text="Foam machinery"
                imageSrc="/file-document-200w.png"
              ></ServicesCard>
              <ServicesCard
                text="Mattress machinery"
                imageSrc="/dice-5-200h.png"
              ></ServicesCard>
            </div>
          </div>
        </div>
        <div className="home-portofolio section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-text-container1">
              <h2 className="home-text07 Heading2">Foam scrap and Binder</h2>
              <button className="button-secondary button-lg button">
                See all products
              </button>
            </div>
            <div className="home-tab-selector-cards-container">
              <PortofolioCard
                imageSrc="/New Folder/image1-1000w.png"
                rootClassName="portofolio-card-root-class-name"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="/New Folder/imagememory-1000w.png"
                projectTitle="A brand-new advertising idea"
                rootClassName="portofolio-card-root-class-name5"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="/New Folder/binder-400h.png"
                projectTitle="Coca-Cola Summer Concept Campaign - 2021"
                rootClassName="portofolio-card-root-class-name4"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div className="home-portofolio1 section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-text-container2">
              <h2 className="home-text08 Heading2">
                Foam and mattress machinery
              </h2>
              <button className="button-secondary button-lg button">
                See all products
              </button>
            </div>
            <div className="home-tab-selector-cards-container1">
              <PortofolioCard
                imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                rootClassName="portofolio-card-root-class-name6"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="/New Folder/machine2-400h.png"
                projectTitle="A brand-new advertising idea"
                rootClassName="portofolio-card-root-class-name7"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                projectTitle="Coca-Cola Summer Concept Campaign - 2021"
                rootClassName="portofolio-card-root-class-name8"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                projectTitle="Ad Campaign - I love you as much as I love Nutella"
                rootClassName="portofolio-card-root-class-name9"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="/New Folder/machine2-400h.png"
                projectTitle="Coca-Colla Next Door Campaign - conceptual"
                rootClassName="portofolio-card-root-class-name10"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                projectTitle="Starbucks secret is a smile when you get your latte"
                rootClassName="portofolio-card-root-class-name11"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div className="home-about section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-text-container3">
              <span className="home-text09">about us</span>
              <h2 className="home-text10 Heading2">
                <span>We supply quality</span>
                <br></br>
                <span>products and services</span>
              </h2>
              <span className="home-text14">Foam scrap and machinery</span>
              <div className="home-checklist">
                <div className="home-check-item">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text15">
                    Quality services and support all time
                  </span>
                </div>
                <div className="home-check-item1">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text16">
                    Long-term strategy development
                  </span>
                </div>
                <div className="home-check-item2">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text17">
                    FREE Brand Audit for startups
                  </span>
                </div>
                <div className="home-check-item3">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text18">
                    Over 10 years in the business
                  </span>
                </div>
                <div className="home-check-item4">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text19">Future-Proofing Projects</span>
                </div>
                <div className="home-check-item5">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text20">
                    Support in any implementation
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/rectangle%20109-1000w.png"
                className="home-image6"
              />
            </div>
          </div>
        </div>
        <div className="home-process section-container">
          <div className="home-max-width5 max-content-container">
            <span className="home-text21">Our process</span>
            <h2 className="home-text22 Heading2">
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
            <div className="home-step">
              <span className="home-text26">01</span>
              <div className="home-container06">
                <span className="home-text27">Finding the best idea</span>
                <span className="home-text28">
                  There are countless businesses already in existence, so it’s
                  very likely that you won’t be the first person to think of an
                  idea or product. There are countless businesses already in
                  existence, so it’s very likely that you won’t be the first
                  person to think of an idea or product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="home-step1">
              <span className="home-text29">02</span>
              <div className="home-container07">
                <span className="home-text30">
                  Intense Brain storming
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text31">
                  Brainstorming is a process of toiling and generating new ideas
                  alone or by holding intensive group discussions between team
                  members in a team.
                </span>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-text32">03</span>
              <div className="home-container08">
                <span className="home-text33">Strong design execution</span>
                <span className="home-text34">
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container09">
          <h1 className="home-text35">
            <span>Discover our unique features</span>
            <br></br>
          </h1>
        </div>
        <div className="home-container10">
          <div className="home-blog">
            <BlogPostCard4
              label="Business &amp; Travel"
              rootClassName="rootClassName1"
            ></BlogPostCard4>
            <div className="home-container11">
              <BlogPostCard4
                label="Nature"
                imageSrc="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHRyYXZlbHxlbnwwfHx8fDE2MjY0MzI2Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="rootClassName2"
              ></BlogPostCard4>
              <BlogPostCard4
                imageSrc="https://images.unsplash.com/photo-1446822775955-c34f483b410b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHx0cmF2ZWwlMjBmb29kfGVufDB8fHx8MTYyNjQ1Mjg0Ng&amp;ixlib=rb-1.2.1&amp;w=1000"
                rootClassName="rootClassName3"
              ></BlogPostCard4>
            </div>
            <BlogPostCard4
              imageSrc="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJvYXR8ZW58MHx8fHwxNjI2NDUyODIx&amp;ixlib=rb-1.2.1&amp;w=1000"
              rootClassName="rootClassName4"
            ></BlogPostCard4>
          </div>
        </div>
        <div className="home-blog1 section-container">
          <div className="home-max-width6 max-content-container">
            <h2 className="home-text38 Heading2">
              <span>Our latest articles and resources</span>
            </h2>
            <span className="home-text40">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <button className="home-primary4 button-secondary button-lg button">
              Explore the blog
            </button>
            <div className="home-blog-cards-container">
              <BlogCard rootClassName="blog-card-root-class-name"></BlogCard>
              <BlogCard
                text1="Aug 14, 2022"
                button="advertising"
                imageSrc="/rectangle%2099%20%5B1%5D-1500w.png"
                rootClassName="blog-card-root-class-name1"
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
      <Footer1></Footer1>
    </div>
  )
}

export default Home
