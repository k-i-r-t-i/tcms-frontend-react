import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"

import ProfileInfo from "./components/ProfileInfo"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login';
import Register from "./pages/Register"
import Userdashboard from './pages/userpages/Userdashboard'
import Privateroute from './components/Privateroute';
import UserEnquiry from "./pages/userpages/UserEnquiry"
import UserProvider from './context/UserProvider';
import AdminDashboard from './pages/adminpages/AdminDashboard';
import AdminHome from './pages/adminpages/AdminHome';
import Admission from "./pages/adminpages/Admission"
import Enquiry from './pages/adminpages/Enquiry';
import Dashboard from './pages/adminpages/Dashboard';
import Reply from './pages/adminpages/Reply';
import Courses from "./pages/adminpages/Courses"
import Module from "./pages/adminpages/Module"
import Viewmodules from "./pages/adminpages/Viewmodules"
import AddCourses from "./pages/adminpages/AddCourses"
import UserAddmission from "./pages/userpages/UserAddmission"
import AdmissionStatus from "./pages/adminpages/AdmissionStaus"


function App() {
  return (
    <div className="App">
      <UserProvider>  
       <Router>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/courses' element={<CourseHome/>} /> 
          <Route path="/about" element={<About/>}/> 
          <Route path='/team' element={<Team/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/journal' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/userEnquiry" element={<UserEnquiry/>}/>
          <Route path="/userAddmission" element={<UserAddmission/>}/>
          <Route path="/user" element={<Privateroute/>}>
            <Route path="dashboard" element={<Userdashboard/>}/>
            <Route path="profile-info/:userId" element={<ProfileInfo/>} />
          </Route>
          <Route path="/admin" element={<AdminDashboard/>}>
            <Route path="Home" element={<AdminHome/>} />
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="enquiry" element={<Enquiry/>} />
            <Route path="courses" element={<Courses/>} />
            <Route path="enquiry/:enquiryId" element={<Reply />} />
            <Route path="admission/:addmissionId" element={<AdmissionStatus/>} />
            <Route path="courses/module/:courseId" element={<Module />} />
            <Route path="courses/addCourse" element={<AddCourses />} />
            <Route path="courses/viewmodule/:courseId" element={<Viewmodules />} />
            <Route path="admission" element={<Admission/>} />
          </Route> 
        </Routes>
      </Router>
     </UserProvider>  
    </div>
  );
}

export default App;




















{/*import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"

import ProfileInfo from "./components/ProfileInfo"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login';
import Register from "./pages/Register"
import Userdashboard from './pages/userpages/Userdashboard'
import Privateroute from './components/Privateroute';
import UserEnquiry from "./pages/userpages/UserEnquiry"
import UserProvider from './context/UserProvider';
import AdminDashboard from './pages/adminpages/AdminDashboard';
import AdminHome from './pages/adminpages/AdminHome';
import Admission from "./pages/adminpages/Admission"
import Enquiry from './pages/adminpages/Enquiry';
import Dashboard from './pages/adminpages/Dashboard';
import Reply from './pages/adminpages/Reply';
function App() {
  return (
    <div className="App">
      <UserProvider>  
       <Router>
    
        <ToastContainer/>
  <Routes>*/}
             
          {/* <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
         */}
           {/* <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path='/courses' element={<CourseHome/>} />
            <Route exact path="/about" element={<About/>}/> 
            <Route exact path='/team' element={<Team/>} />
            <Route exact path='/pricing' element={<Pricing/>} />
            <Route exact path='/journal' element={<Blog/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path="/userEnquiry" element={<UserEnquiry/>}/>
            <Route path="/user" element={<Privateroute/>}>
              <Route>
                <Route path="dashboard" element={<Userdashboard/>}/>
                <Route path="profile-info/:userId" element={<ProfileInfo/>} />
              </Route>
            </Route>
            <Route exact path="/admin" element={<AdminDashboard/>}>
              <Route path="Home" element={<AdminHome/>} />
              <Route path="dashboard" element={<Dashboard/>} />
              <Route path="enquiry" element={<Enquiry/>} />
              <Route path="reply/:enquiryId" element={<Reply />} />
              <Route path="addmission" element={<Admission/>} />
            </Route> 
          </Routes>
          <Footer />
      </Router>
     </UserProvider>  
    </div>
  );
}

export default App;
*/}





















{/*import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App*/}




{/*
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Userdashboard from './pages/Userdashboard';
import Privateroute from './components/Privateroute';
import UserEnquiry from './pages/user-routes/UserEnquiry';
import About from './pages/user-routes/About';
import ProfileInfo from './components/ProfileInfo';
import UserProvider from './context/UserProvider';
import AdminDashboard from './pages/adminpages/AdminDashboard';
import AdminHome from './pages/adminpages/AdminHome';
import Enquiry from './pages/adminpages/Enquiry';
import Addmission from './pages/adminpages/Addmission';
import Users from './pages/adminpages/Users';
import Dashboard from './pages/adminpages/Dashboard';
import Reply from './pages/adminpages/Reply';
function App() {
  return (
    <div className="App">
      <UserProvider>  
       <Router>
        <Header/>
        <ToastContainer/>
      <Routes>
             <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route xact path="/userEnquiry" element={<UserEnquiry/>}/>
            <Route path="/user" element={<Privateroute/>}>
              <Route>
                <Route path="dashboard" element={<Userdashboard/>}/>
                <Route path="profile-info/:userId" element={<ProfileInfo/>} />
              </Route>
            </Route>
            <Route exact path="/admin" element={<AdminDashboard/>}>
              <Route path="Home" element={<AdminHome/>} />
              <Route path="dashboard" element={<Dashboard/>} />
              <Route path="enquiry" element={<Enquiry/>} />
              <Route path="reply/:enquiryId" element={<Reply />} />
              <Route path="addmission" element={<Addmission/>} />
              <Route path="users" element={<Users/>} />
            </Route>
          </Routes>
          <Footer />
      </Router>
     </UserProvider>  
    </div>
  );
}

export default App;

*/}
