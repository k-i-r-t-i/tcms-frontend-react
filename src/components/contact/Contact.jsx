import React from "react"
import Back from "../common/back/Back"
import "./contact.css"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
const Contact = () => {
  // const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  const map ='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112141.26549664263!2d77.2800512!3d28.557312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716284237321!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
    <Header/>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>C-DAC DELHI</h1>
            {/* <p>We're open for any suggestion or just to have a chat</p> */}

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Centre for Development of Advanced Computing,
                  Plot no. 20, FC-33,
                  Institutional Area, Jasola,
                  New Delhi - 110025 (India),
                  Phone:+91-11-26940239</p>
              </div>
              {/* <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div> */}
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            {/* <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
