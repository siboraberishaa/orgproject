import React, { useEffect, useState } from 'react'
import { LuBookOpenCheck, LuClipboardSignature } from "react-icons/lu";
import { GrAchievement } from "react-icons/gr";
import { RiThumbUpLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const Feature = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  
  return (
    <>
        
  <div className="container-fluid p-0">
    <div className="row no-gutters">
      <div className="col-xl-4 col-lg-5 align-self-end">
        <img data-aos="fade-right" data-aos-delay='20' className="img-fluid w-100" src="/images/feature.png" alt="banner-feature" />
      </div>
      <div className="col-xl-8 col-lg-7">
        <div className="row feature-blocks bg-gray justify-content-between">
          <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left" data-aos="zoom-in">
            <i className="ti-book mb-xl-4 mb-lg-3 mb-4 feature-icon"><LuBookOpenCheck /></i>
            <h3 className="mb-xl-4 mb-lg-3 mb-4">Scholorship News</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad</p>
          </div>
          <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left" data-aos="zoom-in">
            <i className="ti-blackboard mb-xl-4 mb-lg-3 mb-4 feature-icon"><LuClipboardSignature /></i>
            <h3 className="mb-xl-4 mb-lg-3 mb-4">Our Notice Board</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad</p>
          </div>
          <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left" data-aos="zoom-in">
            <i className="ti-agenda mb-xl-4 mb-lg-3 mb-4 feature-icon"><GrAchievement /></i>
            <h3 className="mb-xl-4 mb-lg-3 mb-4">Our Achievements</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad</p>
          </div>
          <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left" data-aos="zoom-in">
            <i className="ti-write mb-xl-4 mb-lg-3 mb-4 feature-icon"><RiThumbUpLine /></i>
            <h3 className="mb-xl-4 mb-lg-3 mb-4">Admission Now</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Feature