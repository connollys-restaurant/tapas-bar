import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Connollys Tapas Bar'
  const siteDescription = 'For over 10 years, Connollys has been the home of great tapas & wine in Stratford-Upon-Avon. We serve tapas favourites, hand-crafted pizza, daily specials and a great selection of wine, beer and spirits.'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Restaurant & Bar
            </h2>
          </header>
          <p>
            Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
            nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
            lobortis tortor primis integer massa adipiscing id nisi accumsan
            pellentesque commodo blandit enim arcu non at amet id arcu magna.
            Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate
            lorem neque cubilia.
          </p>
          <ul className="actions">
            <li>
              <a href="Menu" target="_blank" className="button">
                Menu
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <header className="major">
            <h2>
              Takeaway
            </h2>
          </header>
          <p>
            Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
            nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
            lobortis tortor primis integer massa adipiscing id nisi accumsan
            pellentesque commodo blandit enim arcu non at amet id arcu magna.
            Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate
            lorem neque cubilia.
          </p>
          <ul className="actions">
            <li>
              <a href="Takeaway-Menu" className="button">
                Takeaway Menu
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
            magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
            vulputate lorem neque lorem ipsum dolor.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
              <li>
                  <h3 className="icon fa-clock-o">
                    <span className="label">Opening Hours</span>
                  </h3>
                  Thursday - Saturday
                  <br />
                  5-9pm
                </li>
                <li>
                <a href="https://g.page/Connollysrestaurant?share" target="_blank">
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                </a>
                  25 Main Street, Tididngton
                  <br />
                  Stratford-Upon-Avon
                  <br />
                  <a href="https://g.page/Connollysrestaurant?share" target="_blank">CV37 7AN</a>
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
