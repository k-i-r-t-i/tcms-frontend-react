import React from 'react'
import Head from '../components/common/header/Head'
import Header from '../components/common/header/Header'
import Footer from '../components/common/footer/Footer'
const Base = ({ title = "Welcome to our website", children }) => {
    return (
      <div className="container-fluid p-0 m-0">
        <Head/>
        <Header/>
        {children}
        <Footer/>
      </div>
    );
  };
  
  export default Base;