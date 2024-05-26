import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { BsDot } from "react-icons/bs";

const d = new Date();
let year = d.getFullYear();

const Footer = () => {
 

  

  return (
    <>
<footer className='footerPadding'>
  <div className="newsletter">
    <div className="container">
      <div className="row">
        <div className="col-md-9 ml-auto bg-primary py-5 newsletter-block">
          <h3 className="text-white">Subscribe To Our Newsletter</h3>
          <form action="!#">
            <div className="input-wrapper">
              <input type="email" className="form-control border-0" id="newsletter" name="newsletter" placeholder="Your email" />
              <button type="submit" value="send" className={`btn btn-primary `}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="footer bg-footer section border-bottom">
    <div className={`container `}>
      <div className="row">
        <div className="col-lg-4 col-sm-12 mb-5 mb-lg-0">
          <a className="logo-footer" href="/"><img className="img-fluid mb-4" src="/images/logo.png" alt="logo" /></a>
          <ul className="list-unstyled">
            <li className="mb-2"><FaLocationDot /> Pristina, Pristina Kosovo</li>
            <li className="mb-2"><FaPhone /> +383 45 123 456</li>
            <li className="mb-2"><FaPhone /> +383 49 321 654</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 mb-5 mb-md-0">
          <h4 className="text-white mb-5">NAVIGATION</h4>
          <ul className="list-unstyled">
            <li className="mb-3"><a className="text-color" href="about.html"><BsDot /> About Us</a></li>
            <li className="mb-3"><a className="text-color" href="teacher.html"><BsDot /> Our Teacher</a></li>
            <li className="mb-3"><a className="text-color" href="contact.html"><BsDot /> Contact</a></li>
            <li className="mb-3"><a className="text-color" href="blog.html"><BsDot /> Blog</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 mb-5 mb-md-0">
          <h4 className="text-white mb-5">BLOG</h4>
          <ul className="list-unstyled">
            <li className="mb-3"><a className="text-color" href="courses.html"><BsDot /> Courses</a></li>
            <li className="mb-3"><a className="text-color" href="event.html"><BsDot /> Events</a></li>
            <li className="mb-3"><a className="text-color" href="gallary.html"><BsDot /> Gallary</a></li>
            <li className="mb-3"><a className="text-color" href="faqs.html"><BsDot /> FAQs</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 mb-5 mb-md-0">
          <h4 className="text-white mb-5">RESEARCH</h4>
          <ul className="list-unstyled">
            <li className="mb-3"><a className="text-color" href="!#"><BsDot /> Forums</a></li>
            <li className="mb-3"><a className="text-color" href="!#"><BsDot /> Documentation</a></li>
            <li className="mb-3"><a className="text-color" href="!#"><BsDot /> Language</a></li>
            <li className="mb-3"><a className="text-color" href="!#"><BsDot /> Release Status</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12 mb-5 mb-md-0">
          <h4 className="text-white mb-5">REACH US</h4>
          <ul className="list-unstyled">
            <li className="mb-3"><a className="text-color" href="!#"><FaFacebook /> Sample Page</a></li>
            <li className="mb-3"><a className="text-color" href="!#"><FaInstagram /> Sample Page</a></li>
            <li className="mb-3"><a className="text-color" href="!#"><FaEnvelope /> sample@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright py-4 bg-footer">
    <div className="container">
      <div className="row">
        <div className={`col text-center`}>
          <p className="mb-0">Copyright {year} © sample sample name. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer