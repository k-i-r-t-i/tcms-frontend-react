import React, { useState } from 'react';
//import { signUp } from '../services/User-service';
import { toast } from 'react-toastify';
import axios from 'axios';
import Back from '../components/common/back/Back';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import Validation from '../Validation';
const Register = () => {
    
    const [data, setData] = useState({
        salutation: '',
        first_name: '',
        last_name: '',
        tel_code: '',
        mobile: '',
        email: '',
        username: '',
        password: '',
        passwordHint: '',
        security_ques_1: '',
        security_ans_1:'',
        security_ques_2: '',
        security_ans_2:'',
      });
      //const [errorMessage, setErrorMessage] = useState(''); // Define errorMessage state
     // const [errors, setErrors] = useState({}); // Define errors state
       const[errors,setErrors]=useState({})
       const [errorMessage, setErrorMessage] = useState(""); // New state to hold error message

      // const[error,setError]=useState({
      //   errors:{},
      //   isError:false
      // })
      //useEffect(()=>{
        //console.log(data);

     // },[data])
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
        username: '',
        password: '',
        passwordHint: '',
        security_ques_1: '',
        security_ans_1:'',
        security_ques_2: '',
        security_ans_2:'',
        })
      }
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
        setErrors(Validation(data)); // Reset errors
        try {
          const response = await axios.post("http://localhost:8086/api/auth/register", data);
          console.log(response.data);
          toast.success("Registration successful");
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
          marginBottom: '20px',
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
      
      <h3 style={styles.title}>Registration</h3>
      <form style={styles.form} >
        <div style={styles.row}>
          <div style={styles.field}>
            <select name="salutation" style={styles.input} onChange={(e)=>handleChange(e,'salutation')} value={data.salutation}>
              <option value="">Select Salutation</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss">Miss</option>
            </select>
            {errors.salutation && <p style={{color:"red"}}>{errors.salutation}</p>}
          </div>
          <div style={styles.field}>
            <input type="text" name="first_name" style={styles.input} placeholder="First Name" onChange={(e)=>handleChange(e,'first_name')} value={data.first_name} required />
            {errors.first_name && <p style={{color:"red"}}>{errors.first_name}</p>}
          </div>
          <div style={styles.field}>
            <input type="text" name="last_name" style={styles.input} placeholder="Last Name" onChange={(e)=>handleChange(e,'last_name')} value={data.last_name}required />
            {errors.last_name && <p style={{color:"red"}}>{errors.last_name}</p>}
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.field}>
            <select name="tel_code" style={styles.input} onChange={(e)=>handleChange(e,'tel_code')} value={data.tel_code}>
              <option value="">Select Tel Code</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
            </select>
            {errors.tel_code && <p style={{color:"red"}}>{errors.tel_code}</p>}
          </div>
          <div style={styles.field}>
            <input type="tel" name="mobile" style={styles.input} placeholder="Mobile" onChange={(e)=>handleChange(e,'mobile')} value={data.mobile}required />
            {errors.mobile && <p style={{color:"red"}}>{errors.mobile}</p>}
          </div>
          <div style={styles.field}>
            <input type="email" name="email" style={styles.input} placeholder="Email" onChange={(e)=>handleChange(e,'email')} value={data.email}required />
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.field}>
            <input type="password" name="password" style={styles.input} placeholder="Password" onChange={(e)=>handleChange(e,'password')} value={data.password} required />
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
          </div>
          <div style={styles.field}>
            <input type="text" name="passwordHint" style={styles.input} placeholder="Password Hint" onChange={(e)=>handleChange(e,'passwordHint')} value={data.passwordHint} />
            {errors.passwordHint && <p style={{color:"red"}}>{errors.passwordHint}</p>}
          </div>
          <div style={styles.field}>
            <input type="text" name="username" style={styles.input} placeholder="username" onChange={(e)=>handleChange(e,'username')} value={data.username} />
            {errors.username && <p style={{color:"red"}}>{errors.username}</p>}
          </div>
        </div>
        <div style={styles.row}>
        <div style={styles.field}>
    <select
      name="security_ques_1"
      style={styles.input}
      onChange={(e) => handleChange(e, 'security_ques_1')}
      value={data.security_ques_1}
      required
    >
      <option value="">Select Security Question</option>
      <option value="What's your pet name?">What's your pet name?</option>
      <option value="What is your favourite food?">What is your favourite food?</option>
      <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
    </select>
    {errors.security_ques_1 && <p style={{color:"red"}}>{errors.security_ques_1}</p>}
  </div>
  <div style={styles.field}>
    <input
      type="text"
      name="security_ans_1"
      style={styles.input}
      placeholder="Security Answer"
      onChange={(e) => handleChange(e, 'security_ans_1')}
      value={data.security_ans_1}
      required
    />
    {errors.security_ans_1 && <p style={{color:"red"}}>{errors.security_ans_1}</p>}
  </div>
</div>
<div style={styles.row}>
  <div style={styles.field}>
    <select
      name="security_ques_2"
      style={styles.input}
      onChange={(e) => handleChange(e, 'security_ques_2')}
      value={data.security_ques_2}
      required
    >
      <option value="">Select Security Question</option>
      <option value="What's your pet name?">What's your pet name?</option>
      <option value="What is your favourite food?">What is your favourite food?</option>
      <option value="What is your favorite movie?">What is your favorite movie?</option>
    </select>
    {errors.security_ques_2 && <p style={{color:"red"}}>{errors.security_ques_2}</p>}
  </div>
  <div style={styles.field}>
    <input
      type="text"
      name="security_ans_2"
      style={styles.input}
      placeholder="Security Answer"
      onChange={(e) => handleChange(e, 'security_ans_2')}
      value={data.security_ans_2}
      required
    />
    {errors.security_ans_2 && <p style={{color:"red"}}>{errors.security_ans_2}</p>}
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
    
  );
}

export default Register












{/*import React, { useState } from 'react';
//import { signUp } from '../services/User-service';
import { toast } from 'react-toastify';
import axios from 'axios';
import Back from '../components/common/back/Back';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
const Register = () => {
    
    const [data, setData] = useState({
        salutation: '',
        first_name: '',
        last_name: '',
        tel_code: '',
        mobile: '',
        email: '',
        username: '',
        password: '',
        passwordHint: '',
        security_ques_1: '',
        security_ans_1:'',
        security_ques_2: '',
        security_ans_2:'',
      });
      //const [errorMessage, setErrorMessage] = useState(''); // Define errorMessage state
     // const [errors, setErrors] = useState({}); // Define errors state
       const[errors,setErrors]=useState({})
       const [errorMessage, setErrorMessage] = useState(""); // New state to hold error message

      const[error,setError]=useState({
        errors:{},
        isError:false
      })
      //useEffect(()=>{
        //console.log(data);

     // },[data])
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
        username: '',
        password: '',
        passwordHint: '',
        security_ques_1: '',
        security_ans_1:'',
        security_ques_2: '',
        security_ans_2:'',
        })
      }
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
          const response = await axios.post("http://localhost:8086/api/auth/register", data);
          console.log(response.data);
          toast.success("Registration successful");
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
          marginBottom: '20px',
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
        button: {
          padding: '5px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#1eb2a6',
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
      
      <h3 style={styles.title}>Registration</h3>
      <form style={styles.form} >
        <div style={styles.row}>
          <div style={styles.field}>
            <select name="salutation" style={styles.input} onChange={(e)=>handleChange(e,'salutation')} value={data.salutation}>
              <option value="">Select Salutation</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss">Miss</option>
            </select>
          </div>
          <div style={styles.field}>
            <input type="text" name="first_name" style={styles.input} placeholder="First Name" onChange={(e)=>handleChange(e,'first_name')} value={data.first_name} required />
          </div>
          <div style={styles.field}>
            <input type="text" name="last_name" style={styles.input} placeholder="Last Name" onChange={(e)=>handleChange(e,'last_name')} value={data.last_name}required />
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.field}>
            <select name="tel_code" style={styles.input} onChange={(e)=>handleChange(e,'tel_code')} value={data.tel_code}>
              <option value="">Select Tel Code</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
            </select>
          </div>
          <div style={styles.field}>
            <input type="tel" name="mobile" style={styles.input} placeholder="Mobile" onChange={(e)=>handleChange(e,'mobile')} value={data.mobile}required />
          </div>
          <div style={styles.field}>
            <input type="email" name="email" style={styles.input} placeholder="Email" onChange={(e)=>handleChange(e,'email')} value={data.email}required />
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.field}>
            <input type="password" name="password" style={styles.input} placeholder="Password" onChange={(e)=>handleChange(e,'password')} value={data.password} required />
          </div>
          <div style={styles.field}>
            <input type="text" name="passwordHint" style={styles.input} placeholder="Password Hint" onChange={(e)=>handleChange(e,'passwordHint')} value={data.passwordHint} />
          </div>
          <div style={styles.field}>
            <input type="text" name="username" style={styles.input} placeholder="username" onChange={(e)=>handleChange(e,'username')} value={data.username} />
          </div>
        </div>
        <div style={styles.row}>
        <div style={styles.field}>
    <select
      name="security_ques_1"
      style={styles.input}
      onChange={(e) => handleChange(e, 'security_ques_1')}
      value={data.security_ques_1}
      required
    >
      <option value="">Select Security Question</option>
      <option value="What's your pet name?">What's your pet name?</option>
      <option value="What is your favourite food?">What is your favourite food?</option>
      <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
    </select>
  </div>
  <div style={styles.field}>
    <input
      type="text"
      name="security_ans_1"
      style={styles.input}
      placeholder="Security Answer"
      onChange={(e) => handleChange(e, 'security_ans_1')}
      value={data.security_ans_1}
      required
    />
  </div>
</div>
<div style={styles.row}>
  <div style={styles.field}>
    <select
      name="security_ques_2"
      style={styles.input}
      onChange={(e) => handleChange(e, 'security_ques_2')}
      value={data.security_ques_2}
      required
    >
      <option value="">Select Security Question</option>
      <option value="What's your pet name?">What's your pet name?</option>
      <option value="What is your favourite food?">What is your favourite food?</option>
      <option value="What is your favorite movie?">What is your favorite movie?</option>
    </select>
  </div>
  <div style={styles.field}>
    <input
      type="text"
      name="security_ans_2"
      style={styles.input}
      placeholder="Security Answer"
      onChange={(e) => handleChange(e, 'security_ans_2')}
      value={data.security_ans_2}
      required
    />
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
    
  );
}

export default Register
*/}