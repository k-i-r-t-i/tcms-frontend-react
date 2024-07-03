import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const Admission = () => {
  const [users,setUsers]=useState([]);
    const{id}=useParams()
    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8083/api/addmissions");
        setUsers(result.data);
    }
    const deleteUser=async (id)=>{
      await axios.delete(`http://localhost:8083/api/addmissions/${id}`);
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
      <th style={styles.tableHead} scope="col">Id</th>
      <th style={styles.tableHead} scope="col">salutation</th>
      <th style={styles.tableHead} scope="col">first_name</th>
      <th style={styles.tableHead} scope="col">last_name</th>
      <th style={styles.tableHead} scope="col">tel_code</th>
      <th style={styles.tableHead} scope="col">mobile</th>
      <th style={styles.tableHead} scope="col">email</th>
      <th style={styles.tableHead} scope="col">status</th>
      <th style={styles.tableHead} scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
        <tr>
        <th scope="row" key={user.addmissionId}>{user.addmissionId}</th>
        <td>{user.salutation}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.tel_code}</td>
        <td>{user.mobile}</td>
        <td>{user.email}</td>
        <td>{user.status}</td>
        
        <td>
                  <div className="d-flex">
                     <button className='btn btn-sm btn-outline-dark mr-2' onClick={() => deleteUser(user.addmissionId)}  style={{ marginRight: '4px' }}>Delete</button>
                     <Link className='btn btn-sm btn-outline-dark' to={`/admin/admission/${user.addmissionId}`}>edit status</Link>
                    {/*<Link className='btn btn-sm btn-outline-dark' to={`/admin/module/${user.courseId}`}>add module</Link>
                    <div style={{ width: '5px' }}></div> 
                    <Link className='btn btn-sm btn-outline-dark' to={`/admin/viewmodule/${user.courseId}`}>view modules</Link> */}
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

export default Admission