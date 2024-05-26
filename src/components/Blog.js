import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {


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
          <div className="row">
            <div className="col-12">
              <h2 className="section-title" data-aos="fade-up">Latest News</h2>
            </div>
          </div>
          <div className="row justify-content-center">
        <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="30">
          <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
            <img className="card-img-top rounded-0" src="/images/bg_2.jpg" alt="Post thumb" />
            <div className="card-body">
              <ul className="list-inline mb-3">
                <li className="list-inline-item mr-3 ml-0">August 28, 2019</li>
                <li className="list-inline-item mr-3 ml-0">By Jonathon</li>
              </ul>
              <a href="/blog/details">
                <h4 className="card-title blog-t">The Expenses You Are Thinking.</h4>
              </a>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
              <a href="/blog/details" className="btn btn-primary btn-sm">read more</a>
            </div>
          </div>
        </article>
        <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="40">
          <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
            <img className="card-img-top rounded-0" src="/images/bg_2.jpg" alt="Post thumb" />
            <div className="card-body">
              <ul className="list-inline mb-3">
                <li className="list-inline-item mr-3 ml-0">August 13, 2019</li>
                <li className="list-inline-item mr-3 ml-0">By Jonathon Drew</li>
              </ul>
              <a href="/blog/details">
                <h4 className="card-title blog-t">Tips to Succeed in an Online Course</h4>
              </a>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
              <a href="/blog/details" className="btn btn-primary btn-sm">read more</a>
            </div>
          </div>
        </article>
        <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="50"> 
          <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
            <img className="card-img-top rounded-0" src="/images/bg_2.jpg" alt="Post thumb" />
            <div className="card-body">
              <ul className="list-inline mb-3">
                <li className="list-inline-item mr-3 ml-0">August 24, 2018</li>
                <li className="list-inline-item mr-3 ml-0">By Alex Pitt</li>
              </ul>
              <a href="/blog/details">
                <h4 className="card-title blog-t">Orientation Program for the new students</h4>
              </a>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
              <a href="/blog/details" className="btn btn-primary btn-sm" >read more</a>
            </div>
          </div>
        </article>
      </div>
      <div className={`text-center pt-4`}>
      <a data-aos="fade-up" href="/blog" className="btn btn-primary-outline">See all</a>
      </div>
        </div>
    </>
  )
}

export default Blog