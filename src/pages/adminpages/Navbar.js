import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary" style={{height: '60px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>
  <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <a className="navbar-brand" href="/" style={{ paddingTop:'0px'}}>
      {/* {<img src="./images/cdac-logo.png" alt="Logo" width="35" height="29" className="d-inline-block align-text-top" style={{paddingTop: '0px'}}/> } */}
      <span className='stu-data'>Training Centre</span>
    </a> 
    {/* <div>
    <Link type="button" className='btn btn-outline-dark ml-auto' to="/adduser">Add User</Link>
    </div> */}
  </div>
</nav>
  </div>
  )
}

export default Navbar