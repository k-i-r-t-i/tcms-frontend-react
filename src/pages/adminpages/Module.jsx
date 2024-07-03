import React, { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Module = () => {
    const { courseId } = useParams(); // Get courseId from URL parameters

    const [data, setData] = useState({
        mname: '',
        mdiscription: '',
        mstatus: '',
        mshortName: '',
        mfee: '',
      });
      //const [errorMessage, setErrorMessage] = useState(''); // Define errorMessage state
     // const [errors, setErrors] = useState({}); // Define errors state
       const[errors,setErrors]=useState({})
       const [errorMessage, setErrorMessage] = useState(""); // New state to hold error message

      const[error,setError]=useState({
        errors:{},
        isError:false
      })
      useEffect(()=>{
        console.log(data);

      },[data])
      const handleChange=(event,field)=>{
        setData({...data,[field]:event.target.value})

      }
      const resetData=()=>{
        setData({
          mname: '',
          mdiscription: '',
          mstatus: '',
          mshortName: '',
          mfee: '',
        })
      }
     
      const submitForm = async (event) => {
        event.preventDefault();
        setErrors({}); // Reset errors
        try {
          const response = await axios.post(`http://localhost:8083/api/courses/${courseId}/modules/`, data);
          console.log(response.data);
          toast.success("module created");
          resetData(); // Reset the form after successful registration
        } catch (error) {
          if (error.response && error.response.status === 400) {
            setErrors(error.response.data); // Set errors if received from the server
          } else {
            console.error("An error occurred:", error);
            toast.error("An error occurred. Please try again later.");
          }
        }
      };

      const styles = {
        containerWrapper: {
          display: 'flex',
          width: '80vw',
          justifyContent: 'center',
        },
        container: {
          width: '600px', // Increased width for the form
          margin: 'auto',
          marginTop: '50px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // transparent background
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // shadow effect
        },
        placeholder: {
          fontSize: '12px', // Smaller font size for placeholders
          color: '#888', // Optional: Change the color of the placeholder text
      },
        form: {
          display: 'flex',
          flexDirection: 'column',
        },
        inputGroup: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '15px',
        },
        label: {
          width: '100px', // Fixed width for labels
          marginRight: '10px', // Margin between label and input field
        },
        input: {
          flex: '1', // Take remaining space
          padding: '4px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          height: '30px', // Smaller height for input fields
          outline: 'none',
          fontSize: '13px',
         
        },
        buttonGroup: {
          display: 'flex',
          justifyContent: 'flex-end', // Align buttons to the right
        },
        button: {
          padding: '6px',
          margin: '0 5px', // Add margin between buttons
          backgroundColor :'#6c757d', // Darker shade of gray
          //color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          height: '35px', // Smaller height for input fields
          outline: 'none',
          fontSize: '13px',
        },
      };
    
  return (
    <div style={styles.containerWrapper}>
    <div style={styles.container}>
      <form onSubmit={submitForm} style={styles.form} >
      
          <div style={styles.inputGroup}>
            <label htmlFor="mname" style={styles.label}>module name:</label>
            <input type="text" name="mname" style={styles.input} placeholder="module name" onChange={(e)=>handleChange(e,'mname')} value={data.mname} required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="mdiscription" style={styles.label}>description:</label>
            <input type="text" name="mdiscription" style={styles.input} placeholder="module description" onChange={(e)=>handleChange(e,'mdiscription')} value={data.mdiscription} required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="mshortName" style={styles.label}>shortname:</label>
            <input type="text" name="mshortName" style={styles.input} placeholder="module shortname" onChange={(e)=>handleChange(e,'mshortName')} value={data.mshortName} required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="mfee" style={styles.label}>fee:</label>
            <input type="text" name="mfee" style={styles.input} placeholder="module fee" onChange={(e)=>handleChange(e,'mfee')} value={data.mfee} required />
          </div>

          <div style={styles.inputGroup}>
        <label htmlFor="mstatus" style={styles.label}>Status:</label>
        <select 
          name="mstatus" 
          style={styles.input} 
          onChange={(e) => handleChange(e, 'mstatus')} 
          value={data.mstatus} 
          required
        >
          <option value="" disabled>Select status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
<div style={styles.buttonGroup}>
  <button className="btn btn-outline-dark" onClick={resetData} type="reset" style={styles.button}>Reset</button>
  <button className="btn btn-outline-dark" onClick={submitForm} type="add module" style={styles.button}>Save</button>
</div>
      </form>
      </div>
    </div>
  )
}

export default Module