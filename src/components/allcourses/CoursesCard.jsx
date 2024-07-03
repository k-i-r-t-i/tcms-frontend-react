import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './courses.css';
import { Link } from 'react-router-dom';

const CoursesCard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Function to load courses data from API
    const loadCourses = async () => {
      try {
        const result = await axios.get('http://localhost:8083/api/courses/');
        setCourses(result.data);
      } catch (error) {
        console.error("There was an error fetching the courses!", error);
      }
    };

    loadCourses();
  }, []);

  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {courses.map((course) => (
            <div className='items' key={course.courseId}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={`http://localhost:8083/api/courses/img/${course.imageName}`} alt={course.cName} />
                  </div>
                </div>
                <div className='text'>
                  <h1>{course.cname}</h1>
                  <p>{course.cdiscription}</p>
                </div>
              </div>
              <div className='price'>
                <h3>₹ {course.cfee}</h3>
              </div>
              {/* <button className='outline-btn'>ENROLL NOW!</button> */}
              <Link to="/userAddmission" className='outline-btn' style={{ display: 'block', textAlign: 'center' }}>
              ENROLL NOW!
              </Link>
              </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CoursesCard;












/*import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className='outline-btn'>ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
*/















/*import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className='outline-btn'>ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
*/