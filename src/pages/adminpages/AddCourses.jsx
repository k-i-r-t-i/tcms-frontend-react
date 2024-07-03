import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddCourses = () => {

  const [data, setData] = useState({
    cname: '',
    cdiscription: '',
    cstatus: '',
    cshortName: '',
    cfee: '',
  });

  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (event, field) => {
    setData({ ...data, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const resetData = () => {
    setData({
      cname: '',
      cdiscription: '',
      cstatus: '',
      cshortName: '',
      cfee: '',
    });
    setImage(null);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setErrors({}); // Reset errors

    try {
      // First, create the course
      const courseResponse = await axios.post("http://localhost:8083/api/courses/", data);

      const courseId = courseResponse.data.courseId; // Assuming the response contains courseId

      // Then, upload the image using the courseId
      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        await axios.post(`http://localhost:8083/api/courses/image/upload/${courseId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        // toast.success("Image uploaded successfully");
      }

      toast.success("Course created successfully");
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
      width: '600px',
      margin: 'auto',
      marginTop: '50px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
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
      width: '100px',
      marginRight: '10px',
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
      justifyContent: 'flex-end',
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
      <form onSubmit={submitForm} style={styles.form} >

        <div style={styles.inputGroup}>
          <label htmlFor="imageName" style={styles.label}>course image:</label>
          <input type="file" name="imageName" style={styles.input} placeholder="course image" onChange={handleFileChange} required />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="cname" style={styles.label}>course name:</label>
          <input type="text" name="cname" style={styles.input} placeholder="course name" onChange={(e) => handleChange(e, 'cname')} value={data.cname} required />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="cdiscription" style={styles.label}>description:</label>
          <input type="text" name="cdiscription" style={styles.input} placeholder="course description" onChange={(e) => handleChange(e, 'cdiscription')} value={data.cdiscription} required />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="cshortName" style={styles.label}>shortname:</label>
          <input type="text" name="cshortName" style={styles.input} placeholder="course shortname" onChange={(e) => handleChange(e, 'cshortName')} value={data.cshortName} required />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="cfee" style={styles.label}>fee:</label>
          <input type="text" name="cfee" style={styles.input} placeholder="course fee" onChange={(e) => handleChange(e, 'cfee')} value={data.cfee} required />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="cstatus" style={styles.label}>status:</label>
          <select
            name="cstatus"
            style={styles.input}
            onChange={(e) => handleChange(e, 'cstatus')}
            value={data.cstatus}
            required
          >
            <option value="" disabled>Select status</option>
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
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
}

export default AddCourses;











/*
import React, { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { uploadPostImage } from '../../services/User-service';

const AddCourses = () => {

    const [data, setData] = useState({
        cname: '',
        cdiscription: '',
        cstatus: '',
        cshortName: '',
        cfee: '',
      });

      const [image,setImage]=useState(null)
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
      //handling file change event
      const handleFileChange=(event)=>{
        setImage(event.target.files[0])
      }
      const resetData=()=>{
        setData({
          cname: '',
          cdiscription: '',
          cstatus: '',
          cshortName: '',
          cfee: '',
        })
      }
     
      const submitForm = async (event) => {
        event.preventDefault();
        setErrors({}); // Reset errors
        try {
          const response = await axios.post("http://localhost:8083/api/courses/", data);
          console.log(response.data);
          uploadPostImage(image,data.courseId).then(data=>{
            toast.success("image uploaded");
          }).catch(_error=>{
            toast.error("Error in uploading image")
          })
          toast.success("course created");
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
    <div style={styles.container}>
      <form onSubmit={submitForm} style={styles.form} >

          <div style={styles.inputGroup}>
            <label htmlFor="imageName" style={styles.label}>course image:</label>
            <input type="file" name="imageName" style={styles.input} placeholder="course image" onChange={(e)=>handleFileChange(e,'imageName')} required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="cname" style={styles.label}>course name:</label>
            <input type="text" name="cname" style={styles.input} placeholder="course name" onChange={(e)=>handleChange(e,'cname')} value={data.cname} required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="cdiscription" style={styles.label}>description:</label>
            <input type="text" name="cdiscription" style={styles.input} placeholder="course description" onChange={(e)=>handleChange(e,'cdiscription')} value={data.cdiscription} required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="cshortName" style={styles.label}>shortname:</label>
            <input type="text" name="cshortName" style={styles.input} placeholder="course shortname" onChange={(e)=>handleChange(e,'cshortName')} value={data.cshortName} required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="cfee" style={styles.label}>fee:</label>
            <input type="text" name="cfee" style={styles.input} placeholder="course fee" onChange={(e)=>handleChange(e,'cfee')} value={data.cfee} required />
          </div>

          <div style={styles.inputGroup}>
        <label htmlFor="cstatus" style={styles.label}>Status:</label>
        <select 
          name="cstatus" 
          style={styles.input} 
          onChange={(e) => handleChange(e, 'cstatus')} 
          value={data.cstatus} 
          required
        >
          <option value="" disabled>Select status</option>
          <option value="active">Active</option>
          <option value="upcoming">upcoming</option>
          <option value="ongoing">ongoing</option>
        </select>
      </div>
<div style={styles.buttonGroup}>
  <button className="btn btn-outline-dark" onClick={resetData} type="reset" style={styles.button}>Reset</button>
  <button className="btn btn-outline-dark" onClick={submitForm} type="add course" style={styles.button}>Save</button>
</div>
      </form>
      
    </div>
  )
}

export default AddCourses
*/