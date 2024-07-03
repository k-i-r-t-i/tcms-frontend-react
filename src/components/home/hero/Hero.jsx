import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import Header from "../../common/header/Header"
import { Link } from 'react-router-dom';
import Footer from "../../common/footer/Footer";
const Hero = () => {
  return (
    <>
    {/* <Link type="button" className='btn btn-outline-dark ml-auto' to="/adduser">Add User</Link> */}
    <Header/>
    
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO TCMS' title='Best Online Education Expertise' />
            <p>EXTENDING CLASSROOMS BEYOND WALLS</p> 
          </div>
        </div>
      </section>
      <div className='margin'></div>
      <div className='button-container'>
        <Link to="/userEnquiry" className='primary-btn'>
          ENQUIRE NOW <i className='fa fa-long-arrow-alt-right'></i>
        </Link>
        <Link to='/userAddmission' className='secondary-btn'>
         ADMISSIONS <i className='fa fa-long-arrow-alt-right'></i>
        </Link>
      </div>
     
    </>
    
  )
}

export default Hero