import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Navbar as Navbbar, Offcanvas } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {

    const location = useLocation();

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    useEffect(() => {
      
  
      const onResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  

      window.addEventListener('resize', onResize);
      return () => {

        window.removeEventListener('resize', onResize);
      };
    }, []);

  



  return (
    <>
        <header className={`header`}>
        {isMobile ? <>
            <div className="top-header py-2 bg-white">
            <div className="container">
                <div className='d-flex justify-content-between'>
                    <span className='ms-2'><i><FaPhoneAlt /></i> +383 44 123 456</span>
                    <span className='me-2'>
                    <i><img src='/images/icons/albania-flag-icon.png' alt='alb' width={22} /></i>
                    <i><img className='mx-3' src='/images/icons/united-kingdom-flag-icon.png' alt='uk' width={20} /></i>
                    </span>
                </div>
            </div>
        </div>
        </> : <div className="top-header py-2 bg-white">
            <div className="container">
            <div className="row no-gutters">
                <div className="col-lg-4 text-center text-lg-left">
                <ul className="list-inline d-inline ms-4">
                    <li className="list-inline-item mx-0"><a className="d-inline-block p-2 text-color" href="!#"><i><FaPhoneAlt /></i></a>+383 44 123 456</li>
                    <li className="list-inline-item mx-2"><span className="d-inline-block p-2 text-color"></span>|</li>
                    <li className="list-inline-item mx-0"><a className="d-inline-block p-2 text-color" href="!#"><i><FaEnvelope /></i></a>sample@gmail.com</li>
                </ul>
                </div>
                <div className="col-lg-4 text-center text-lg-right">
                
                </div>
                <div className="col-lg-4 text-center text-lg-right">
                <ul className="list-inline d-inline ms-4">
                    <li className="list-inline-item mx-0"><span className="d-inline-block p-2 text-color"><i><img src='/images/icons/albania-flag-icon.png' alt='alb' width={22} /></i></span></li>
                    <li className="list-inline-item mx-0"><span className="d-inline-block p-2 text-color"><i><img src='/images/icons/united-kingdom-flag-icon.png' alt='uk' width={20} /></i></span></li>
                </ul>
                </div>
            </div>
            </div>
        </div>}
        {isMobile ? <div className="navigation w-100">
      <div className="container">
        <Navbbar className="navbar navbar-light p-0" expand="lg">
        <Navbbar.Brand href="/"><img src="/images/logo.png" alt="logo" /></Navbbar.Brand>
          <Navbbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
            <Navbbar.Brand href="/"><img src="/images/logo.png" alt="logo" /></Navbbar.Brand>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Navbbar.Collapse id="offcanvasNavbar">
              <ul className="navbar-nav ml-auto text-center" style={{backgroundColor: '#fff'}} >
              <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className={`nav-item ${location.pathname === "/about-us" ? "active" : ""}`}>
                    <a className="nav-link" href="/about-us">About</a>
                </li>
                <li className={`nav-item ${location.pathname === "/blog" ? "active" : ""}`}>
                  <a className="nav-link" href="/blog">Blog</a>
                  </li>
                <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
                </ul>

              </Navbbar.Collapse>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbbar>
      </div>
    </div> : <div className="navigation w-100">
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <a className="navbar-brand" href="/"><img src="/images/logo.png" alt="logo" /></a>
                <button className="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation"
                aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav ms-auto text-center">
                <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className={`nav-item ${location.pathname === "/about-us" ? "active" : ""}`}>
                    <NavLink className="nav-link" to="/about-us">About</NavLink>
                </li>
                      <li className={`nav-item ${location.pathname === "/blog" ? "active" : ""}`}>
                        <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </li>
                      <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                      </li>
                  </ul>
                </div>
            </nav>
            </div>
        </div>}
        </header>
    </>
  )
}

export default Navbar