import React, { useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import { FaRegUser } from 'react-icons/fa'
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import withPreloader from '../components/withPreloader';

const BlogScreen = () => {

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);


  return (
    <>
        <PageTitle pageTitle={'Blog'} />
        <section id="blog-posts" className="blog-posts section">

      <div className="container">
        <div className="row gy-4">

        <div className="col-lg-4">
            <article className="position-relative h-100" data-aos='fade-up'>

              <div className="post-img position-relative overflow-hidden">
                <img src="/images/blog-1.jpg" className="img-fluid" alt="mg" />
                <span className="post-date">21 April 2024</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i><FaRegUser /></i> <span className="ps-2">John Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i><BiCategoryAlt /></i> <span className="ps-2">Politics</span>
                  </div>
                </div>

                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                </p>

                <hr />
                <div className='text-center'>
                  <Link to={'/blog/details'} className="btn btn-sm btn-primary-outline"><span>Read More</span></Link>
                </div>

              </div>

            </article>
        </div>
        <div className="col-lg-4">
            <article className="position-relative h-100" data-aos='fade-up'>

              <div className="post-img position-relative overflow-hidden">
                <img src="/images/blog-1.jpg" className="img-fluid" alt="mg" />
                <span className="post-date">21 April 2024</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i><FaRegUser /></i> <span className="ps-2">John Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i><BiCategoryAlt /></i> <span className="ps-2">Politics</span>
                  </div>
                </div>

                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                </p>

                <hr />
                <div className='text-center'>
                  <Link to={'/blog/details'} className="btn btn-sm btn-primary-outline"><span>Read More</span></Link>
                </div>

              </div>

            </article>
        </div>
        <div className="col-lg-4">
            <article className="position-relative h-100" data-aos='fade-up'>

              <div className="post-img position-relative overflow-hidden">
                <img src="/images/blog-1.jpg" className="img-fluid" alt="mg" />
                <span className="post-date">21 April 2024</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i><FaRegUser /></i> <span className="ps-2">John Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i><BiCategoryAlt /></i> <span className="ps-2">Politics</span>
                  </div>
                </div>

                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                </p>

                <hr />
                <div className='text-center'>
                  <Link to={'/blog/details'} className="btn btn-sm btn-primary-outline"><span>Read More</span></Link>
                </div>

              </div>

            </article>
        </div>
        <div className="col-lg-4">
            <article className="position-relative h-100" data-aos='fade-up'>

              <div className="post-img position-relative overflow-hidden">
                <img src="/images/blog-1.jpg" className="img-fluid" alt="mg" />
                <span className="post-date">21 April 2024</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i><FaRegUser /></i> <span className="ps-2">John Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i><BiCategoryAlt /></i> <span className="ps-2">Politics</span>
                  </div>
                </div>

                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                </p>

                <hr />
                <div className='text-center'>
                  <Link to={'/blog/details'} className="btn btn-sm btn-primary-outline"><span>Read More</span></Link>
                </div>

              </div>

            </article>
        </div>
        <div className="col-lg-4">
            <article className="position-relative h-100" data-aos='fade-up'>

              <div className="post-img position-relative overflow-hidden">
                <img src="/images/blog-1.jpg" className="img-fluid" alt="mg" />
                <span className="post-date">21 April 2024</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i><FaRegUser /></i> <span className="ps-2">John Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i><BiCategoryAlt /></i> <span className="ps-2">Politics</span>
                  </div>
                </div>

                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                </p>

                <hr />
                <div className='text-center'>
                  <Link to={'/blog/details'} className="btn btn-sm btn-primary-outline"><span>Read More</span></Link>
                </div>

              </div>

            </article>
        </div>
        <div className="col-lg-4">
            <article className="position-relative h-100" data-aos='fade-up'>

              <div className="post-img position-relative overflow-hidden">
                <img src="/images/blog-1.jpg" className="img-fluid" alt="mg" />
                <span className="post-date">21 April 2024</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i><FaRegUser /></i> <span className="ps-2">John Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i><BiCategoryAlt /></i> <span className="ps-2">Politics</span>
                  </div>
                </div>

                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                </p>

                <hr />
                <div className='text-center'>
                  <Link to={'/blog/details'} className="btn btn-sm btn-primary-outline"><span>Read More</span></Link>
                </div>

              </div>

            </article>
        </div>

        </div>
      </div>

    </section>
        
    </>
  )
}

export default withPreloader(BlogScreen)

