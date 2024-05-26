import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

    
    
    useEffect(() => {
        AOS.init({
          once: true,
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

      


  return (
    <>
        

            <div className="container">
                <div className="row align-items-center">
                <div className="col-md-6 order-2 order-md-1">
                <h2 data-aos="fade-right" data-aos-delay="30" className="section-title">About Us</h2>
                    <p data-aos="fade-right" data-aos-delay="50">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat </p>
                    <p data-aos="fade-right" data-aos-delay="50">cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                    <div className='text-center'>
                        <a data-aos="fade-right" data-aos-delay="50" href="about.html" className="btn btn-primary-outline mt-3">Learn more</a>
                    </div>
                </div>
                <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
                    <img data-aos="fade-left" data-aos-delay="30" className="img-fluid w-100" src="/images/about.png" alt="about" />
                </div>
                </div>
            </div>
    </>
  )
}

export default About