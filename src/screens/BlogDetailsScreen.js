import React from 'react'
import { BiFolder } from 'react-icons/bi'
import { BsClock } from 'react-icons/bs'
import { FaClock, FaRegUser } from 'react-icons/fa'
import { PiTagSimple } from 'react-icons/pi'

const BlogDetailsScreen = () => {
  return (
    <>
        <div className="container">
      <div className="row">

        <div className="col-lg-8">

          <div id="blog-details" className="blog-details section">
            <div className="container">

              <article className="article">

                <div className="post-img">
                  <img src="/images/blog-1.jpg" alt="" className="img-fluid" />
                </div>

                <h2 className="title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h2>

                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center"><i><FaRegUser /></i> <a href="blog-details.html">John Doe</a></li>
                    <li className="d-flex align-items-center"><i><BsClock /></i> <a href="blog-details.html"><time>April 22, 2024</time></a></li>
                  </ul>
                </div>

                <div className="content">
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                    Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                  </p>

                  <p>
                    Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
                  </p>

                  <p>
                    Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
                    Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque.
                    Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
                  </p>

                  <h3>Et quae iure vel ut odit alias.</h3>
                  <p>
                    Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                    Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
                    Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.
                  </p>

                  <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                  <p>
                    Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
                    Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
                  </p>
                  <p>
                    Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
                  </p>

                </div>

                <div className="meta-bottom">
                  <i><BiFolder /></i>
                  <ul className="cats">
                    <li><a href="!#">Business</a></li>
                  </ul>

                  <i><PiTagSimple /></i>
                  <ul className="tags">
                    <li><a href="!#">Creative</a></li>
                    <li><a href="!#">Tips</a></li>
                    <li><a href="!#">Marketing</a></li>
                  </ul>
                </div>

              </article>

            </div>
          </div>

          

        </div>

        <div className="col-lg-4 sidebar">

          <div className="widgets-container">
            <div className="categories-widget widget-item">
              <h3 className="widget-title">Categories</h3>
              <ul className="mt-3">
                <li><a href="!#">General <span>(25)</span></a></li>
                <li><a href="!#">Lifestyle <span>(12)</span></a></li>
                <li><a href="!#">Travel <span>(5)</span></a></li>
                <li><a href="!#">Design <span>(22)</span></a></li>
                <li><a href="!#">Creative <span>(8)</span></a></li>
                <li><a href="!#">Educaion <span>(14)</span></a></li>
              </ul>

            </div>


            <div className="recent-posts-widget widget-item">

              <h3 className="widget-title">Recent Posts</h3>

              <div className="post-item">
                <img src="/images/blog-1.jpg" alt="" className="flex-shrink-0" />
                <div>
                  <h4><a href="#!">Nihil blanditiis at in nihil autem</a></h4>
                  <time>Jan 1, 2024</time>
                </div>
              </div>

              <div className="post-item">
              <img src="/images/blog-1.jpg" alt="" className="flex-shrink-0" />
                <div>
                  <h4><a href="!#">Quidem autem et impedit</a></h4>
                  <time>Jan 1, 2024</time>
                </div>
              </div>

              <div className="post-item">
              <img src="/images/blog-1.jpg" alt="" className="flex-shrink-0" />
                <div>
                  <h4><a href="!#">Id quia et et ut maxime similique occaecati ut</a></h4>
                  <time>Jan 1, 2024</time>
                </div>
              </div>
            </div>

            <div className="tags-widget widget-item">

              <h3 className="widget-title">Tags</h3>
              <ul>
                <li><a href="!#">App</a></li>
                <li><a href="!#">IT</a></li>
                <li><a href="!#">Business</a></li>
                <li><a href="!#">Mac</a></li>
                <li><a href="!#">Design</a></li>
                <li><a href="!#">Office</a></li>
                <li><a href="!#">Creative</a></li>
                <li><a href="!#">Studio</a></li>
                <li><a href="!#">Smart</a></li>
                <li><a href="!#">Tips</a></li>
                <li><a href="!#">Marketing</a></li>
              </ul>

            </div>

          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default BlogDetailsScreen