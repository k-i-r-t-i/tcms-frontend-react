import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const Enquiry = () => {
  const [users,setUsers]=useState([]);
    const{id}=useParams()
    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8082/api/enquiries/");
        setUsers(result.data);
    }
    const deleteUser=async (id)=>{
      await axios.delete(`http://localhost:8082/api/enquiries/${id}`);
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
    };
  return (
    <div style={styles.containerWrapper}>
    <div className='container-fluid' >
        <div className='py-4 tableWrapper'>
        <table className="table border shadow" style={styles.table} >
  <thead >
    <tr>
      <th style={styles.tableHead} scope="col">Id</th>
      <th style={styles.tableHead} scope="col">userId</th>
      <th style={styles.tableHead} scope="col">name</th>
      <th style={styles.tableHead} scope="col">about</th>
      <th style={styles.tableHead} scope="col">content</th>
      <th style={styles.tableHead} scope="col">date created</th>
      <th style={styles.tableHead} scope="col">status</th>
      <th style={styles.tableHead} scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
        <tr>
        <th scope="row" key={user.enquiryId}>{user.enquiryId}</th>
        <td>{user.userId}</td>
        <td>{user.name}</td>
        <td>{user.enquiryAbout}</td>
        <td>{user.enquiryContent}</td>
        <td>{user.dateCreated}</td>
        <td>{user.status}</td>
        <td>
                  <div className="d-flex">
                    <button className='btn btn-sm btn-outline-dark mr-2' onClick={() => deleteUser(user.enquiryId)}  style={{ marginRight: '4px' }}>Delete</button>
                    <Link className='btn btn-sm btn-outline-dark' to={`/admin/enquiry/${user.enquiryId}`}>Reply</Link>
                  </div>
                </td>
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

export default Enquiry
