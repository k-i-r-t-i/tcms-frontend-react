
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
const Courses = () => {
  const [users,setUsers]=useState([]);
    const{id}=useParams()
    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8083/api/courses/");
        setUsers(result.data);
    }
    const deleteUser=async (id)=>{
      await axios.delete(`http://localhost:8083/api/courses/${id}`);
      loadUsers()
    }

    const styles = {
      containerWrapper: {
        display: 'flex',
        width: '75vw',
        justifyContent: 'center',
      },
      tableHead: {
        backgroundColor: '#1eb2a6', // Set background color for thead
      }
    }
  return (
    <div style={styles.containerWrapper}>
    <div className='container-fluid'>
        <div className='py-4 tableWrapper'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th style={styles.tableHead} scope="col">courseId</th>
      <th style={styles.tableHead} scope="col">cname</th>
      <th style={styles.tableHead} scope="col"></th>
      <th style={styles.tableHead} scope="col">shortName</th>
      <th style={styles.tableHead} scope="col">cdiscription</th>
      <th style={styles.tableHead} scope="col">cstatus</th>
      <th style={styles.tableHead} scope="col">cfee</th>
      <th style={styles.tableHead} scope="col">Action  <Link className='btn btn-sm btn-outline-dark' to={"/admin/courses/addCourse"}>add course</Link></th>
      
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
        <tr>
        <th scope="row" key={user.courseId}>{user.courseId}</th>
        <td>{user.cname}</td>
        <td>{user.name}</td>
        <td>{user.cshortName}</td>
        <td>{user.cdiscription}</td>
        <td>{user.cstatus}</td>
        <td>{user.cfee}</td>
        <td>
                  <div className="d-flex">
                    <button className='btn btn-sm btn-outline-dark mr-2' onClick={() => deleteUser(user.courseId)}  style={{ marginRight: '4px' }}>Delete</button>
                    <Link className='btn btn-sm btn-outline-dark' to={`/admin/courses/module/${user.courseId}`}>add module</Link>
                    <div style={{ width: '5px' }}></div> {/* Adjust the width as needed */}
                    <Link className='btn btn-sm btn-outline-dark' to={`/admin/courses/viewmodule/${user.courseId}`}>view modules</Link>
                  </div>
                </td>
        {/* <button className='btn btn-outline-dark ml-auto'  onClick={()=>deleteUser(user.enquiryId)}>Delete</button> */}
        {/* Pass enquiryId as a URL parameter */}
        {/* <Link type="button" className='btn btn-outline-dark ml-auto'  to={`/admin/reply/${user.enquiryId}`} > Reply</Link>    */}
      </tr>
        ))
    }
   
  </tbody>
</table>
        </div>
    </div>
    </div>
  )
}

export default Courses