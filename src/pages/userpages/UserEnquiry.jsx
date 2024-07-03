import React, { useState,useEffect } from 'react';
//import { signUp } from '../services/User-service';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useContext } from 'react';
import userContext from '../../context/userContext';
import Back from '../../components/common/back/Back';
import { Link, useParams } from 'react-router-dom';
import Head from '../../components/common/header/Head';
import Header from '../../components/common/header/Header';
import Footer from '../../components/common/footer/Footer';

const UserEnquiry = () => {
  const userContextData = useContext(userContext); // Accessing userContext values

  const [data, setData] = useState({
    replyMessage: '',
    userId: userContextData.user.data.userId || '', // Set initial value from user context
    name: `${userContextData.user.data.first_name || ''} ${userContextData.user.data.last_name || ''}`, // Concatenate first_name and last_name
    enquiryAbout: '',
    enquiryContent: '',
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
    const resetData = () => {
      setData({
        replyMessage: '',
        userId: userContextData.user.data.userId || '', // Reset to initial value from user context
        name: `${userContextData.user.data.first_name || ''} ${userContextData.user.data.last_name || ''}`, // Concatenate first_name and last_name
        enquiryAbout: '',
        enquiryContent: '',
      });
    };
   // const submitForm=(event)=>{
    //  event.preventDefault()
      //data validation

      //call server api for sending data
    //  signUp(data).then((resp)=>{
     //   console.log(resp);
      //  console.log("success log");
      //  toast.success("you are registered successfully");
     // }).catch((error)=>{
      //  console.log(error);
      //  console.log("error log");
     // })

    //  }
    const submitForm = async (event) => {
      event.preventDefault();
      setErrors({}); // Reset errors
      try {
        const response = await axios.post(`http://localhost:8082/api/enquiries/`, data);
        console.log(response.data);
        toast.success("success");
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
      container: {
        width: '500px', // Increased width for the form
        margin: 'auto',
        marginTop: '50px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // transparent background
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // shadow effect
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
        flex: '1', // Take remaining space
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
      },
      buttonGroup: {
        display: 'flex',
        justifyContent: 'flex-end', // Align buttons to the right
      },
      button: {
        padding: '10px',
        margin: '0 5px', // Add margin between buttons
        backgroundColor :'#6c757d', // Darker shade of gray
        //color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      },
    };
  
    
return (
  <div>
    <Header/>
  <Back title='Enquire Now' />
  <div style={styles.container}>
    <form onSubmit={submitForm} style={styles.form} >
    <div style={styles.inputGroup}>
          <label htmlFor="userId" style={styles.label}>User Id:</label>
          <input type="text" name="userId" style={styles.input} placeholder="User Id" onChange={(e)=>handleChange(e,'userId')} value={data.userId} required /> 
    </div>
    <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input type="text" name="name" style={styles.input} placeholder="Enter Name" onChange={(e)=>handleChange(e,'name')} value={data.name} required />
          
    </div>
    <div style={styles.inputGroup}>
          <label htmlFor="enquiryAbout" style={styles.label}>Enquire About:</label>
          <select name="enquiryAbout" style={styles.input} onChange={(e)=>handleChange(e,'enquiryAbout')} value={data.enquiryAbout} required>
              <option value="">-Select Type-</option>
              <option value="Course">Course</option>
              <option value="Addmission">Addmission</option>
              <option value="Instructor">Instructor</option>
            </select>
        </div>
     <div style={styles.inputGroup}>
          <label htmlFor="enquiryContent" style={styles.label}>Enquiry Content:</label>
          <input type="text" name="enquiryContent" style={styles.input} placeholder="Enquiry Content" onChange={(e)=>handleChange(e,'enquiryContent')} value={data.enquiryContent} required />
          
      </div>
<div style={styles.buttonGroup}>
<button className="btn btn-outline-dark" onClick={resetData} type="reset" style={styles.button}>Reset</button>
<button className="btn btn-outline-dark" onClick={submitForm} type="submit" style={styles.button}>Send</button>
</div>
    </form>
    </div>
    <Footer />
  </div>
  
);
}
export default UserEnquiry