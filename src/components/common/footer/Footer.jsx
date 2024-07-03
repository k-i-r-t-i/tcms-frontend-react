import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      {/* <section className='newletter'>
        <div className='container flexSB' > */}
          {/* <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div> */}
          {/*<div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
          */}
        {/* </div>
      </section> */}
      <div className='images'>
            <img src="./images/footer/f6.png"  width="10%"
                height="60px" alt='Newsletter Image 1' />
            <img src="./images/footer/f2.png"  width="10%"
                height="60px" alt='Newsletter Image 2' />
            <img src="./images/footer/f3.png"  width="10%"
                height="60px" alt='Newsletter Image 3' />
            <img src="./images/footer/f4.png"  width="10%"
                height="60px" alt='Newsletter Image 4' />
            <img src="./images/footer/f5.png"  width="10%"
                height="60px" alt='Newsletter Image 5' />
          </div>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>TRAINING CENTRE</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            {/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> */}

            {/* <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i> */}
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
            <li className='enquire-link'><Link to="/about" >
               About Us
              </Link></li>
              <li className='enquire-link'><Link to="/courses" >
               Courses 
              </Link></li>
              <li className='enquire-link'><Link to="/contact" >
               Contact Us
              </Link></li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li className='enquire-link'><Link to="/userEnquiry" >
               enquire now 
              </Link></li>
              <li className='enquire-link'><Link to="/userAddmission" >
               addmission 
              </Link></li>
              <li className='enquire-link'><Link to="/register" >
               Sign Up
              </Link></li>
              
            </ul>
          </div>
          {/* <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li className='enquire-link'>
              <Link to="/userEnquiry" >
              <i className='fa fa-map'></i> enquire now 
              </Link>
                {/* <i className='fa fa-map'></i>
                enquire now */}
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                Phone: +91-20-25503100
                Fax: +91-20-25503131
              </li>
              {/* <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li> */}
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
        Website owned & maintained by: Centre for Development of Advanced Computing (C-DAC)
        </p>
        <p>
        © 2024 C-DAC. All rights reserved, Last Updated: Monday, October 30, 2023 <i className='fa fa-heart'></i> 
        </p>
      </div>
    </>
  )
}

export default Footer