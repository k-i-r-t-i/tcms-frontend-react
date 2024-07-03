import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import SideMenu from '../../components/SideMenu';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../../App.css';

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row className="row-offcanvas row-offcanvas-left">
        <Col xs={12} md={4} className="sidebar-offcanvas">
          
            <SideMenu />
          </Col>
          <Col xs={12} md={8} className='main-content ps-md-5 pt-2'>
          
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminDashboard;















/*import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
//import SideMenu from '../components/SideMenu'
import SideMenu from '../../components/SideMenu';
import { Outlet, Link, Navigate } from 'react-router-dom'
import Navbar from './Navbar';
//import { isAdminUser } from '../../auth';
const AdminDashboard = () => {
  //const dashboardView=()=>{
    const styles = {

      
    }
    return(
      <>
      <Navbar/>
    <div>
      
      <div>
              <Container className="p-3">
              <Row>
                  <Col md={{
                      span: "4",
                      offset:1
                  }} className="">
  
                      <SideMenu/>
                       </Col>
                  <Col md={5} className='ps-3 pt-2'>
                      
                       <Outlet/>
                  </Col>
              </Row>
          </Container> 
      </div>
      
      </div>
      </>
    )
  }

export default AdminDashboard
*/
  //  return (
  //   (isAdminUser()?dashboardView():<Navigate to="/login"/>)
  //  )

 