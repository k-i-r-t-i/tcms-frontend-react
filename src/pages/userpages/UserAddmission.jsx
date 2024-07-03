import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Header from '../../components/common/header/Header';
import Footer from '../../components/common/footer/Footer';
import Back from '../../components/common/back/Back';
import { Link, useParams, useNavigate } from 'react-router-dom';

const UserAddmission = () => {
  const [users, setUsers] = useState([]);
  const { courseId } = useParams(); // Get courseId from URL parameters
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8083/api/courses/");
    setUsers(result.data);
  };

  const [data, setData] = useState({
    salutation: '',
    first_name: '',
    last_name: '',
    tel_code: '',
    mobile: '',
    email: '',
    courseId: '', // Add courseId to your data state
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(""); // New state to hold error message

  const handleChange = (event, field) => {
    setData({ ...data, [field]: event.target.value });
  };

  const resetData = () => {
    setData({
      salutation: '',
      first_name: '',
      last_name: '',
      tel_code: '',
      mobile: '',
      email: '',
      courseId: '',
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setErrors({}); // Reset errors
    try {
      const response = await axios.post(`http://localhost:8083/api/addmissions?courseIds=${data.courseId}`, data);
      console.log(response.data);
      toast.success("you've applied");
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

  const handleCourseChange = (event) => {
    const selectedCourseId = event.target.value;
    setData({ ...data, courseId: selectedCourseId }); // Update courseId in state
  };

  const styles = {
    container: {
      width: '60%', // Fit to 90% of screen
      margin: '50px auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
      marginBottom: '20px',
      textAlign: 'center',
      fontSize: '24px',
      color: '#333',
    },
    form: {
      marginBottom: '20px',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
    field: {
      flex: '1',
      marginRight: '10px',
    },
    input: {
      width: '100%',
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      outline: 'none',
      fontSize: '12px',
    },
    center: {
      textAlign: 'center', // Center align the buttons
    },
    inputGroup: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    label: {
      width: '100px', // Fixed width for labels
      marginRight: '10px', // Margin between label and input field
      fontSize: '13px',
    },
    button: {
      padding: '5px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#6c757d',
      color: '#fff',
      fontSize: '12px',
      cursor: 'pointer',
      margin: '0 5px', // Add some margin between buttons
    },
  };

  return (
    <div>
      <Header />
      <Back title='' />
      <div style={styles.container}>
        <h3 style={styles.title}>apply admission</h3>
        <form style={styles.form}>
          <div style={styles.row}>
            <div style={styles.field}>
              <label htmlFor="salutation" style={styles.label}>salutation:</label>
              <select name="salutation" style={styles.input} onChange={(e) => handleChange(e, 'salutation')} value={data.salutation}>
                <option value="">Select Salutation</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss">Miss</option>
              </select>
            </div>
            <div style={styles.field}>
              <label htmlFor="first_name" style={styles.label}>first name:</label>
              <input type="text" name="first_name" style={styles.input} placeholder="First Name" onChange={(e) => handleChange(e, 'first_name')} value={data.first_name} required />
            </div>
          </div>
          <div style={styles.row}>
            <div style={styles.field}>
              <label htmlFor="last_name" style={styles.label}>last name:</label>
              <input type="text" name="last_name" style={styles.input} placeholder="Last Name" onChange={(e) => handleChange(e, 'last_name')} value={data.last_name} required />
            </div>
            <div style={styles.field}>
              <label htmlFor="tel_code" style={styles.label}>tel code:</label>
              <select name="tel_code" style={styles.input} onChange={(e) => handleChange(e, 'tel_code')} value={data.tel_code}>
                <option value="">Select Tel Code</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
            </div>
          </div>
          <div style={styles.row}>
            <div style={styles.field}>
              <label htmlFor="mobile" style={styles.label}>mobile:</label>
              <input type="tel" name="mobile" style={styles.input} placeholder="Mobile" onChange={(e) => handleChange(e, 'mobile')} value={data.mobile} required />
            </div>
            <div style={styles.field}>
              <label htmlFor="email" style={styles.label}>Email:</label>
              <input type="email" name="email" style={styles.input} placeholder="Email" onChange={(e) => handleChange(e, 'email')} value={data.email} required />
            </div>
          </div>
          <div style={styles.row}>
            <div style={styles.field}>
              <label htmlFor="courses" style={styles.label}>courses:</label>
              <select name="courses" style={styles.input} onChange={handleCourseChange} value={data.courseId}>
                <option value="" disabled>Select a Course</option>
                {users.map((user, index) => (
                  <option key={index} value={user.courseId}>
                    {user.cname}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div style={styles.center}>
            <button onClick={resetData} type="reset" style={styles.button}>Reset</button>
            <button onClick={submitForm} type="submit" style={styles.button}>Apply</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default UserAddmission;









{/*import React, { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Header from '../../components/common/header/Header';
import Footer from '../../components/common/footer/Footer';
import Back from '../../components/common/back/Back';
import { Link, useParams,useNavigate } from 'react-router-dom';
const UserAddmission = () => {

    const [users,setUsers]=useState([]);
    const { courseId } = useParams(); // Get courseId from URL parameters
    const navigate = useNavigate(); // useNavigate hook to programmatically navigate
    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8083/api/courses/");
        setUsers(result.data);
    }
    

    const [data, setData] = useState({
        salutation: '',
        first_name: '',
        last_name: '',
        tel_code: '',
        mobile: '',
        email: '',
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
            salutation: '',
            first_name: '',
            last_name: '',
            tel_code: '',
            mobile: '',
            email: '',
        })
      }
     
      const submitForm = async (event) => {
        event.preventDefault();
        setErrors({}); // Reset errors
        try {
          const response = await axios.post(`http://localhost:8083/api/addmissions?courseIds=${data.courseId}`, data);
          console.log(response.data);
          toast.success("you've applied");
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

      const handleCourseChange = (event) => {
        const selectedCourseId = event.target.value;
        setData({ ...data, courseId: selectedCourseId }); // Update courseId in state
      };
    

      const styles = {
        container: {
          width: '60%', // Fit to 90% of screen
          margin: '50px auto',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        title: {
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: '24px',
          color: '#333',
        },
        form: {
          marginBottom: '20px',
        },
        row: {
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        },
        field: {
          flex: '1',
          marginRight: '10px',
        },
        input: {
          width: '100%',
          //width: 'calc(100% - 22px)', // Adjusted width to make smaller
          padding: '5px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          outline: 'none',
          fontSize: '12px',
        },
        center: {
            textAlign: 'center', // Center align the buttons
          },
          inputGroup: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
          },
          label: {
            width: '100px', // Fixed width for labels
            marginRight: '10px', // Margin between label and input field
            fontSize: '13px',
          },
        button: {
          padding: '5px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor :'#6c757d',
          // backgroundColor: '#1eb2a6',
          color: '#fff',
          fontSize: '12px',
          cursor: 'pointer',
          margin: '0 5px', // Add some margin between buttons
        },
      };
      

  return (
    <div>
    <Header/>
    <Back title='' />
  <div style={styles.container}>
    
    <h3 style={styles.title}>apply addmission</h3>
    <form style={styles.form} >
      <div style={styles.row}>
        <div style={styles.field}>
        <label  htmlFor="salutation" style={styles.label}>salutation:</label>
          <select name="salutation" style={styles.input} onChange={(e)=>handleChange(e,'salutation')} value={data.salutation}>
            <option value="">Select Salutation</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Miss">Miss</option>
          </select>
        </div>
        <div style={styles.field}>
        <label  htmlFor="first_name" style={styles.label}>first name:</label>
          <input type="text" name="first_name" style={styles.input} placeholder="First Name" onChange={(e)=>handleChange(e,'first_name')} value={data.first_name} required />
        </div>
        </div>
        <div style={styles.row}>
        <div style={styles.field}>
        <label  htmlFor="last_name" style={styles.label}>last name:</label>
          <input type="text" name="last_name" style={styles.input} placeholder="Last Name" onChange={(e)=>handleChange(e,'last_name')} value={data.last_name}required />
        </div>
        <div style={styles.field}>
        <label  htmlFor="tel_code" style={styles.label}>tel code:</label>
          <select name="tel_code" style={styles.input} onChange={(e)=>handleChange(e,'tel_code')} value={data.tel_code}>
            <option value="">Select Tel Code</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+91">+91</option>
          </select>
        </div>
        </div>
        <div style={styles.row}>
        <div style={styles.field}>
        <label  htmlFor="mobile" style={styles.label}>mobile:</label>
          <input type="tel" name="mobile" style={styles.input} placeholder="Mobile" onChange={(e)=>handleChange(e,'mobile')} value={data.mobile}required />
        </div>
        
        <div style={styles.field}>
          <label  htmlFor="email" style={styles.label}>Email:</label>
          <input type="email" name="email" style={styles.input} placeholder="Email" onChange={(e)=>handleChange(e,'email')} value={data.email}required />
        </div>
      </div>
      <div style={styles.row}>
      <div style={styles.field}>
            <label htmlFor="courses" style={styles.label}>courses:</label>   
            <select name="courses" style={styles.input} onChange={handleCourseChange} value={data.courseId}>
                <option value="" disabled>Select a Course</option>
                {users.map((user, index) => (
                  <option key={index} value={user.courseId}>
                    {user.cname}
                  </option>
                ))}
              </select>
     </div>
    
     </div>
<div style={styles.center}>
<button onClick={resetData} type="reset" style={styles.button}>Reset</button>
<button onClick={submitForm} type="submit" style={styles.button}>Register</button>
</div>
    </form>
    
  </div>
  <Footer />
  </div>
  
  )
}

export default UserAddmission

*/}