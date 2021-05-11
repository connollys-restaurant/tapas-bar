import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/connollys_logo_medium.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="https://www.connollystapasbar.co.uk" className="image avatar">
        <img src={avatar} alt="Connolly's Tapas Bar" />
      </a>
      <h1>
        <strong>Welcome to Connolly's</strong>
        <br />
        For over 10 years, Connolly's has been the home of great tapas & wine in Stratford-Upon-Avon.
        <br />
        We serve tapas favourites, hand-crafted pizza, daily specials and a great selection of wine, beer and spirits.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
