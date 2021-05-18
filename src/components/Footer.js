import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/connollystapas" target="_blank" rel="noreferrer" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/connollystapas" target="_blank" rel="noreferrer" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/pages/category/Bar/Connollys-Deli-Tapas-Bar-114306121914586/" target="_blank" rel="noreferrer" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="mailto:info@connollystapasbar.co.uk" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Connolly's 2021</li>
        <li>
          Mitts off.
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
