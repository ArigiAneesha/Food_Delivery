import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h2 className='logo'>Anee Delivery</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptatibus, doloribus placeat necessitatibus cum corporis voluptate veniam sapiente, illo vel, quod vero facilis nulla a dolor error vitae voluptas animi?</p>
            <div className="footer-social-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-square-x-twitter"></i>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@aneedelivery.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 &copy; AneeDelivery.com - All right Reserved.</p>
    </div>
  )
}

export default Footer
