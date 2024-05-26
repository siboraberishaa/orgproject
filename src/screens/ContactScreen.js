import React, { useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import { SlLocationPin } from "react-icons/sl";
import { BsEnvelopeAt, BsTelephone } from 'react-icons/bs';
import Aos from 'aos';
import withPreloader from '../components/withPreloader';

const ContactScreen = () => {

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
        <PageTitle pageTitle={'Contact'} />
        <section id="contact" className="contact section">

<div className="container" >
    <div className="row">
        <div className="col-12" data-aos='fade-up'>
            <h2 className="section-title">Contact Us</h2>
        </div>
    </div>

  <div className="row gy-4">

    <div className="col-lg-3 col-md-6 " data-aos='fade-up'>
      <div className="info-item d-flex flex-column justify-content-center align-items-center">
        <i><SlLocationPin /></i>
        <h3>Address</h3>
        <p>Pristina, Pristina Kosovo</p>
      </div>
    </div>

    <div className="col-lg-6" data-aos='fade-up'>
      <div className="info-item d-flex flex-column justify-content-center align-items-center">
        <i><BsTelephone /></i>
        <h3>Call Us</h3>
        <div className='d-flex'>
            <p>+383 44 123 456</p>
            <p className='ms-3'>+383 49 123 456</p>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6" data-aos='fade-up'>
      <div className="info-item d-flex flex-column justify-content-center align-items-center">
        <i><BsEnvelopeAt /></i>
        <h3>Email Us</h3>
        <p>info@example.com</p>
      </div>
    </div>

  </div>

  <div className="row gy-4 mt-1" data-aos='fade-up'>
    <div className="col">
    <iframe title='frame' style={{border:0, width: '100%', height: '350px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46940.2060114189!2d21.1587273!3d42.666380100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sPristina!5e0!3m2!1sen!2s!4v1716204971083!5m2!1sen!2s" frameBorder="0" allowFullScreen></iframe>
    </div>

  </div>

</div>

</section>
    </>
  )
}

export default withPreloader(ContactScreen)