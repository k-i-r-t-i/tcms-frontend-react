import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const Viewmodules = () => {
    const [users,setUsers]=useState([]);
    const { courseId } = useParams(); // Get courseId from URL parameters
    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers=async()=>{
        const result=await axios.get(`http://localhost:8083/api/courses/${courseId}/modules/`);
        setUsers(result.data);
    }
    const deleteUser=async (courseId, moduleId)=>{
      await axios.delete(`http://localhost:8083/api/courses/${courseId}/modules/${moduleId}`);
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
    <div  className='container-fluid'>
    <div className='py-4 tableWrapper'>
    <table className="table border shadow">
<thead>
<tr>
  <th style={styles.tableHead} scope="col">moduleId</th>
  <th style={styles.tableHead} scope="col">mname</th>
  <th style={styles.tableHead} scope="col">shortName</th>
  <th style={styles.tableHead} scope="col">discription</th>
  <th style={styles.tableHead} scope="col">status</th>
  <th style={styles.tableHead} scope="col">fee</th>
  <th style={styles.tableHead} scope="col">Action</th>
</tr>
</thead>
<tbody>
{
    users.map((user,index)=>(
    <tr>
    <th scope="row" key={user.moduleId}>{user.moduleId}</th>
    <td>{user.mname}</td>
    <td>{user.mshortName}</td>
    <td>{user.mdiscription}</td>
    <td>{user.mstatus}</td>
    <td>{user.mfee}</td>
    <td>
              <div className="d-flex">
              <button className='btn btn-sm btn-outline-dark mr-2' onClick={() => deleteUser(courseId,user.moduleId)}  style={{ marginRight: '4px' }}>Delete</button>
                {/* <button className='btn btn-sm btn-outline-dark mr-2' onClick={() => deleteUser(user.enquiryId)}  style={{ marginRight: '4px' }}>Delete</button> */}
                {/* <Link className='btn btn-sm btn-outline-dark' to={`/admin/module/${user.courseId}`}>add module</Link> */}
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

export default Viewmodules