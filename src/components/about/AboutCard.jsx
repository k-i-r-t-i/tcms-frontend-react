import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
           <div className='left row'>
    <div className="card-container">
      <img
        Src="./images/about_us.jpg" 
        width="55%"
        height="50%"
        alt="card-image" className="card-img" />
        <h1 className="card-title">ABOUT US</h1>
        <p className="card-description">
                    Centre for Development of Advanced Computing (C-DAC) is the premier R&D organization of the Ministry of Electronics and Information Technology (MeitY) for carrying out R&D in IT, Electronics and associated areas.
                </p>
                <ul className="card-description">
                    <li>
                        Different areas of C-DAC originated at different times, many of which came out as a result of identification of opportunities.
                    </li>
                    <li>
                        The setting up of C-DAC in 1988 was to build Supercomputers in the context of the denial of import of Supercomputers by the USA.
                    </li>
                    <li>
                        Since then, C-DAC has been undertaking the building of multiple generations of Supercomputers starting from PARAM with 1 GF in 1988.
                    </li>
                    <li>
                        Almost at the same time, C-DAC started building Indian Language Computing Solutions with the setting up of the GIST group (Graphics and Intelligence based Script Technology).
                    </li>
                    <li>
                        National Centre for Software Technology (NCST) set up in 1985, had also initiated work in Indian Language Computing around the same period.
                    </li>
                    
                </ul>
      {/* {buttonText && link && (
        <a href={link} className="card-btn">
          {buttonText}
        </a>
      )} */}
    </div>
            {/* <img src='./images/about.webp' alt='' /> */}
          </div>   
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard