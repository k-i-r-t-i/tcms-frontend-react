import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const AdmissionStatus = () => {
  const { addmissionId} = useParams(); // Get enquiryId from URL parameters

    const [data, setData] = useState({
        status: '',
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
          status: '',
        })
      }
      const submitForm = async (event) => {
        event.preventDefault();
        setErrors({}); // Reset errors
        try {
          const response = await axios.put(`http://localhost:8083/api/addmissions/${addmissionId}/status`, data);
          console.log(response.data);
          toast.success("status updated");
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
      width: '60vw', // Increased width for the form
      margin: 'auto',
      marginTop: '50px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparent background
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Shadow effect
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputGroup: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    label: {
      width: '100px', // Fixed width for labels
      marginRight: '10px', // Margin between label and input field
    },
    input: {
      flex: '1',
      padding: '4px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      height: '30px',
      outline: 'none',
      fontSize: '12px',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'flex-end', // Align buttons to the right
    },
    button: {
      padding: '6px',
      margin: '0 5px',
      backgroundColor: '#6c757d',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      height: '35px',
      outline: 'none',
      fontSize: '13px',
    },
  };

  return (
    <div style={styles.containerWrapper}>
    <div style={styles.container}>
      <form onSubmit={submitForm} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="status" style={styles.label}>Status:</label>
          <select
            name="status"
            style={styles.input}
            onChange={(e)=>handleChange(e,'status')}
            value={data.status}
            required
          >
            <option value="">Select Status</option>
            <option value="paid">Paid</option>
            <option value="enrolled">Enrolled</option>
          </select>
        </div>
        <div style={styles.buttonGroup}>
          <button className="btn btn-outline-dark" onClick={resetData} type="reset" style={styles.button}>Reset</button>
          <button className="btn btn-outline-dark" type="submit" style={styles.button}>Save</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AdmissionStatus;
