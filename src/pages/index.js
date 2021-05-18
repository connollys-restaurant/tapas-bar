import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import ContactForm from '../components/contactForm'

import Menu from '../assets/documents/Menu.pdf'
import Takeaway from '../assets/documents/Takeaway-Menu.pdf'

const HomeIndex = () => {
  const siteTitle = 'Connolly\'s Tapas Bar'
  const siteDescription = 'For over 10 years, Connolly\'s has been the home of great tapas & wine in Stratford-Upon-Avon. We serve tapas favourites, hand-crafted pizza, daily specials and a great selection of wine, beer and spirits.'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <h2>
            Restaurant &amp; Bar
          </h2>
          <h3>Join us every Thursday, Friday &amp; Saturday from 5-11pm.</h3>
          <p>
            It's been a long wait, but we're back and better than ever!
          </p>
          <p>
            Set in the heart of the beautiful village of Tiddington, a mile from Stratford-Upon-Avon, Connolly's is a family-owned and run restaurant and bar.
            <br />Take a table, a seat at the bar or go alfresco on our sun-soaked terrace and enjoy our unique take on Spanish-style tapas. We servce classic
            tapas-sized dishes, perfect for creating your own tasting menu. Check the boards for our daily specials for main courses and for something a little
            bit different.
          </p>
          <p>
            We also serve fresh, hand-made, stone-baked pizzas straight from the oven with Connolly's signature topping combinations.</p>
          <ul className="actions">
            <li>
              <a href={Menu} target="_blank" rel="noreferrer" className="button">
                Menu
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
            <h2>
              Takeaway
            </h2>
          <p>
            We're still offering tasty takeaway every Thursday, Friday and Saturday.
          </p>
          <p>
            Pre-orders and collection only between 5pm and 9pm.
          </p>
          <p>
            Please call <a href="tel:01789 204712">01789 204712</a> ahead to order.
          </p>
          <ul className="actions">
            <li>
              <a href={Takeaway} target="_blank" rel="noreferrer" className="button">
                Takeaway Menu
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            We're always happy to help and you can get in touch with us by phone, email or social.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
            <ContactForm></ContactForm>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
              <li>
                  <h3 className="icon fa-clock-o">
                    <span className="label">Opening Hours</span>
                  </h3>
                  Thursday - Saturday
                  <br />
                  5-11pm
                </li>
                <li>
                <a href="https://g.page/Connollysrestaurant?share" target="_blank" rel="noreferrer">
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                </a>
                  25 Main Street, Tiddington
                  <br />
                  Stratford-Upon-Avon
                  <br />
                  <a href="https://g.page/Connollysrestaurant?share" target="_blank" rel="noreferrer">CV37 7AN</a>
                </li>
                <li>
                  <a href="tel:01789 204712">
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                  </a>
                  <a href="tel:01789 204712">01789 204712</a>
                </li>
                <li>
                  <a href="mailto:info@connollystapasbar.co.uk">  
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                  </a>
                  <a href="mailto:info@connollystapasbar.co.uk">info@connollystapasbar.co.uk</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
