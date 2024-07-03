import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SlHome } from "react-icons/sl";
import { AiOutlineDashboard } from "react-icons/ai";
import { TbUserQuestion } from "react-icons/tb";
import { PiStudentDuotone } from "react-icons/pi";
import { PiUsersDuotone } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";

const SideMenu = () => {
  return (
    <div className="sticky-top">
      <ListGroup>
        <ListGroup.Item as={NavLink} to="/admin/home" action className="d-flex align-items-center">
          <SlHome size={17} />
          <span className='ms-2'>Home</span>
        </ListGroup.Item>
        <ListGroup.Item as={NavLink} to="/admin/dashboard" action className="d-flex align-items-center">
          <AiOutlineDashboard size={20} />
          <span className='ms-2'> Dashboard</span>
        </ListGroup.Item>
        <ListGroup.Item as={NavLink} to="/admin/enquiry" action className="d-flex align-items-center">
          <TbUserQuestion size={20} />
          <span className='ms-2'> Enquiry</span>
        </ListGroup.Item>
        <ListGroup.Item as={NavLink} to="/admin/admission" action className="d-flex align-items-center">
          <PiStudentDuotone size={20} />
          <span className='ms-2'> Admission</span>
        </ListGroup.Item>
        <ListGroup.Item as={NavLink} to="/admin/courses" action className="d-flex align-items-center">
          <PiUsersDuotone size={20} />
          <span className='ms-2'> Courses & Batches</span>
        </ListGroup.Item>
        <ListGroup.Item action className="d-flex align-items-center">
          <AiOutlineLogout size={20} />
          <span className='ms-2'> Logout</span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default SideMenu;








/*import React from 'react'
import {ListGroup} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SlHome } from "react-icons/sl";
import { AiOutlineDashboard } from "react-icons/ai";
import { TbUserQuestion } from "react-icons/tb";
import { PiStudentDuotone } from "react-icons/pi";
import { PiUsersDuotone } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
const SideMenu = () => {
  return (
    <div>
      <ListGroup>
              <ListGroup.Item as={NavLink} to="/admin/home" action className="d-flex align-items-center"> <SlHome size={17}/>
              <span className='ms-2'>Home</span></ListGroup.Item>
              <ListGroup.Item as={NavLink} to="/admin/dashboard" action className="d-flex align-items-center"><AiOutlineDashboard size={20}/>
              <span className='ms-2'> Dashboard</span></ListGroup.Item>
              <ListGroup.Item as={NavLink} to="/admin/enquiry" action className="d-flex align-items-center"><TbUserQuestion size={20} />
              <span className='ms-2'> Enquiry</span></ListGroup.Item>
              <ListGroup.Item as={NavLink} to="/admin/admission" action className="d-flex align-items-center"><PiStudentDuotone size={20}/>
              <span className='ms-2'> Addmission</span></ListGroup.Item>
              <ListGroup.Item as={NavLink} to="/admin/courses" action className="d-flex align-items-center"><PiUsersDuotone size={20}/>
              <span className='ms-2'> Courses & Bactches</span></ListGroup.Item>
              <ListGroup.Item action className="d-flex align-items-center"><AiOutlineLogout size={20}/>
              <span className='ms-2'> Logout</span></ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default SideMenu
*/