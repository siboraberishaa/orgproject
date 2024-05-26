import React, { useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { PiBooksLight } from "react-icons/pi";
import { BsCheck2Circle, BsPeople } from 'react-icons/bs';
import { GrArticle } from 'react-icons/gr';
import { FaRegHandshake, FaRegSmile } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import withPreloader from '../components/withPreloader';

const AboutUsScreen = () => {


  const { ref, inView } = useInView({
    triggerOnce: true, // Counter will only run once
    threshold: 0.5, // Trigger when 10% of the section is visible
  });


  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
        <PageTitle pageTitle={'About Us'} />
        <section id="alt-services" className={`alt-services section`}>
        <div className="container">

        <div className="row justify-content-around gy-4">
          <div data-aos="fade-left" className="features-image col-lg-6"><img src="/images/about.png" alt="img" /></div>

          <div data-aos="fade-right" data-aos-delay='30' className="col-lg-5 d-flex flex-column justify-content-center">
            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>
            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>


            <div className="icon-box d-flex position-relative">
              <i className="flex-shrink-0"><PiBooksLight /></i>
              <div>
                <h4><a href="!#" className="stretched-link">Nemo Enim</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>
            <div className="icon-box d-flex position-relative">
              <i className="flex-shrink-0"><BsCheck2Circle /></i>
              <div>
                <h4><a href="!#" className="stretched-link">Dine Pad</a></h4>
                <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
              </div>
            </div>


          </div>
        </div>

      </div>

    </section>

    <section id="stats-counter" className={`stats-counter section`}>
      <div className="container section-title">
        <h2>Statistics</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" ref={ref}>
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="flex-shrink-0"><GrArticle /></i>
              <div>
                <span className="purecounter">
                  {inView && <CountUp start={0} end={232} duration={1} />}
                </span>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="flex-shrink-0"><FaRegHandshake /></i>
              <div>
                <span className="purecounter">
                  {inView && <CountUp start={0} end={521} duration={1} />}
                </span>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="flex-shrink-0"><FaRegSmile /></i>
              <div>
                <span className="purecounter">
                  {inView && <CountUp start={0} end={1463} duration={1} />}
                </span>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="flex-shrink-0"><BsPeople /></i>
              <div>
                <span className="purecounter">
                  {inView && <CountUp start={0} end={15} duration={1} />}
                </span>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    </>
  )
}

export default withPreloader(AboutUsScreen)