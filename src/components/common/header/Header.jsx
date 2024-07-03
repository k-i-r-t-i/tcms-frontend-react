import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, getCurrentUserDetail, doLogout } from "../../../auth";
import userContext from "../../../context/userContext";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const userContextData = useContext(userContext);
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, []);

  const logout = () => {
    doLogout(() => {
      setLogin(false);
      userContextData.setUser({
        data: null,
        login: false
      });
      navigate("/");
    });
  };

  return (
    <>
      <Head />
      <header style={{  height: "90px" ,margin:'0px'}}>
        <nav className='flexSB' style={{marginTop: '5px'}}>
        <div className="logo-container" >
            <Link to='/'>
              <img
                src="./images/cdac-logo.png"
                alt="Logo"
                width="55%"
                height="50%"
                style={{ display: 'block', marginLeft: '5%', paddingTop: '30px' }}
              />
            </Link>
          </div>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)} style={{ fontFamily: 'Times New Roman' }}>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/courses'>ALL COURSES</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            {/* <li>
              <Link to='/team'>TEAM</Link>
            </li> */}
            {/* <li>
              <Link to='/pricing'>PRICING</Link>
            </li>
            <li>
              <Link to='/journal'>JOURNAL</Link>
            </li> */}
            <li>
              <Link to='/contact'>CONTACT</Link>
            </li>
            <li>
              <Link to='/register'>SIGN UP</Link>
            </li>
            {login ? (
              <>
                <li>
                  {/* <Link to={`/user/profile-info/${user.id}`} style={{ marginRight: '10px' }}>Profile Info</Link> */}
                  <Link to="/user/profile-info" style={{ marginRight: '10px' }}>{user.email}</Link>
                  <Link to="/" onClick={logout}>LOGOUT</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" style={{ marginRight: '10px' }}>LOGIN</Link>
                <Link to="/register">SIGNUP</Link>
              </li>
            )}
          </ul>
          {/* <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div> */}
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;











{/*import { useContext } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";

import { doLogout, getCurrentUserDetail, isLoggedIn } from "../auth";
import userContext from "../context/userContext.js";

const CustomNavbar = () => {
    const userContextData = useContext(userContext)
    let navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)

    useEffect(() => {

        setLogin(isLoggedIn())
        setUser(getCurrentUserDetail())

    }, [login])


    const logout = () => {
        doLogout(() => {
            //logged out
            setLogin(false)
            userContextData.setUser({
                data: null,
                login: false
            })

            navigate("/")
        })
    }


    return (
        <div style={{ backgroundColor: "#FFD700",boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} >
            <Navbar 
                // color="light"
                dark
                expand="md"
                fixed=""
                className="px-5"
            >
                <NavbarBrand tag={ReactLink} to="/">
                    TCMS
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >

                        <NavItem>
                            <NavLink tag={ReactLink} to="/" >
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/about" >
                                About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/services" >
                                Courses
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/userEnquiry" >
                                Enquiry
                            </NavLink>
                        </NavItem>



                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                More
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag={ReactLink} to="/login">
                                    Contact Us
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Admissions
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>


                    <Nav navbar>

                        {
                            login && (

                                <>

                                    
                                //     <NavItem>
                                //     {userContextData.isAdminUser && (
                                //     <>
                                //     <NavLink tag={ReactLink} to="/admin/dashboard" >
                                //             Admin Dashboard
                                //         </NavLink>
                                //      </>
                                //     )}
                                // </NavItem>
                                     <NavItem>
                                        <NavLink tag={ReactLink} to={`/user/profile-info/${user.id}`} >
                                            Profile Info
                                        </NavLink>
                                    </NavItem>



                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/user/dashboard" >
                                            {user.email}
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink tag={ReactLink} onClick={logout} >
                                            Logout
                                        </NavLink>
                                    </NavItem>
                                </>



                            )
                        }

                        {
                            !login && (
                                <>
                                    <NavItem>

                                   
                                        <NavLink tag={ReactLink} to="/login" >
                                            Login
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/register" >
                                            Signup
                                        </NavLink>
                                    </NavItem>


                                </>
                            )
                        }

                    </Nav>





                </Collapse>
            </Navbar>
        </div>

    )
}

export default CustomNavbar;
*/}


















{/*import React, { useState, useEffect, useContext } from "react";
import { NavLink as ReactLink, Link, useNavigate } from "react-router-dom";
import { isLoggedIn, getCurrentUserDetail, doLogout } from "../../../auth"
import userContext from "../../../context/userContext"
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const userContextData = useContext(userContext);
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  const logout = () => {
    doLogout(() => {
      setLogin(false);
      userContextData.setUser({
        data: null,
        login: false
      });
      navigate("/");
    });
  };

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              {login ? (
                <>
                  <li>
                      <Link to={`/user/profile-info/${user.id}`} style={{ marginRight: '10px' }}>Profile Info</Link>
                      <Link to="/" style={{ marginRight: '10px' }}>{user.email}</Link>
                      <Link to="/" onClick={logout}>Logout</Link>
                 </li>
                </>
              ) : (
                <li>
                  <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
                  <Link to="/register">Signup</Link>
                </li>
              )}
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
*/}





{/*import React, { useState } from "react"
import { useEffect } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";

import { doLogout, getCurrentUserDetail, isLoggedIn } from "../auth";
import userContext from "../context/userContext.js";

import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  const userContextData = useContext(userContext)
    let navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)

    useEffect(() => {

        setLogin(isLoggedIn())
        setUser(getCurrentUserDetail())

    }, [login])


    const logout = () => {
        doLogout(() => {
            //logged out
            setLogin(false)
            userContextData.setUser({
                data: null,
                login: false
            })

            navigate("/")
        })
    }


  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>

            <li>

{
    login && (

        <>

            
        //     <NavItem>
        //     {userContextData.isAdminUser && (
        //     <>
        //     <NavLink tag={ReactLink} to="/admin/dashboard" >
        //             Admin Dashboard
        //         </NavLink>
        //      </>
        //     )}
        // </NavItem>
             <NavItem>
                <NavLink tag={ReactLink} to={`/user/profile-info/${user.id}`} >
                    Profile Info
                </NavLink>
            </NavItem>



            <NavItem>
                <NavLink tag={ReactLink} to="/user/dashboard" >
                    {user.email}
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink tag={ReactLink} onClick={logout} >
                    Logout
                </NavLink>
            </NavItem>
        </>



    )
}

{
    !login && (
        <>
            <NavItem>

           
                <NavLink tag={ReactLink} to="/login" >
                    Login
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ReactLink} to="/register" >
                    Signup
                </NavLink>
            </NavItem>


        </>
    )
}

</li>


          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
*/}