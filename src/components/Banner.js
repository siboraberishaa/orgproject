import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { motion } from 'framer-motion';
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";

const Banner = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const owlOptions = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000, 
        autoplayHoverPause: false,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      };


    return (
      <>
      <OwlCarousel className="owl-theme" items={1} {...owlOptions} >
      <section className="hero-section overlay bg-cover " style={{ backgroundImage: 'url(/images/bg_1.jpg)'}}>
      <div className="container">
    <div className="hero-slider">
      <div className="hero-slider-item">
        <div className="row">
          <div className="col-md-8">
          <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-white"
                >
                  Lorem ipsum dolor sit amet consectetur
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-muted mb-4"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer
                </motion.p>
                <motion.a
                  href="/about-us"
                  className={`btn btn-primary ${isMobile ? 'btn-sm' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Learn More
                </motion.a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
      </section>

      <section className="hero-section overlay bg-cover " style={{ backgroundImage: 'url(/images/bg_2.jpg)' }}>
      <div className="container">
    <div className="hero-slider">
      <div className="hero-slider-item">
        <div className="row">
          <div className="col-md-8">
          <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-white"
                >
                  Lorem ipsum dolor sit amet consectetur
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-muted mb-4"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer
                </motion.p>
                <motion.a
                  href="/about-us"
                  className={`btn btn-primary ${isMobile ? 'btn-sm' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Learn More
                </motion.a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
      </section>
      </OwlCarousel>

      <section className={`${isMobile ? 'px-4' : ''}`} style={{paddingTop: `${isMobile ? '90px' : ''}`}}>
			<div className="container-wrap">
				<div className="row no-gutters">
          <div className="col-md-4 d-flex services align-self-stretch py-5 px-4 bg-primary">
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-teacher"><FaRegHandshake size={50} color='#fff' /></span>
              </div>
              <div className="media-body px-5 mt-4">
                <h3 className="heading text-white">Lorem Ipsum</h3>
                <p className='text-white mt-4' style={{fontWeight: '600'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>      
          </div>
          <div className={`col-md-4 d-flex services align-self-stretch py-5 px-4 bg-darken ${isMobile ? 'mt-3' : ''}`}>
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-reading"><AiOutlineFileSearch size={50} color='#fff' /></span>
              </div>
              <div className="media-body px-5 mt-4">
                <h3 className="heading text-white">Lorem Ipsum</h3>
                <p className='text-white mt-4' style={{fontWeight: '600'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>    
          </div>
          <div className={`col-md-4 d-flex services align-self-stretch py-5 px-4 bg-primary ${isMobile ? 'mt-3' : ''}`}>
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-books"><FiBookOpen size={50} color='#fff' /></span>
              </div>
              <div className="media-body px-5 mt-4">
                <h3 className="heading text-white">Lorem Ipsum</h3>
                <p className='text-white mt-4' style={{fontWeight: '600'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>      
          </div>
        </div>
			</div>
		</section>
      </>
    )
  }

export default Banner