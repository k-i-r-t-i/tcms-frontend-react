import React, { useState } from 'react';
import { loginUser } from '../services/User-service';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { doLogin } from '../auth';
import { useContext } from 'react';
import Back from '../components/common/back/Back';
import userContext from '../context/userContext';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
const LoginForm = () => {
   const userContextData=useContext(userContext)
    let redirect=useNavigate();
    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    });

    const handleChange = (event, field) => {
        let actualValue = event.target.value;
        setLoginDetails({
            ...loginDetails,
            [field]: actualValue
        });
    };

//    const handleReset = () => {
//         setLoginDetails({
//             username: "",
//             password: "",
//         });
//     };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(loginDetails);
        //validation
        if (loginDetails.username.trim() === '' || loginDetails.password.trim() === '') {
            toast.error("Username and password are required!!");
            return;
        }
       //submit the data to server to generate token
        loginUser(loginDetails)
            .then((data) => {
                //save the data to local storage
                doLogin(data,()=>{
                    console.log("login detail is saved to local storage");
                    //redirect to user dashboard page
                    // /user/dashboard
                     userContextData.setUser({
                         data: data.user,
                         login: true,
                     })
                   //userContextData.setIsLogin(true)
                   //userContextData.setUserData(data)
                    redirect("/");
                })
                console.log("User logged in:", data);
                toast.success("Login Success")
                // Handle successful login
            })
            .catch(error => {
                console.log(error);
                toast.error("Something went wrong on the server!!");
            });
    };

    const styles = {
        container: {
            width: '300px',
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
        formGroup: {
            marginBottom: '20px',
        },
        input: {
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            outline: 'none',
            fontSize: '14px',
        },
        button: {
            width: '100%',
            padding: '8px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#1eb2a6',
            color: '#fff',
            fontSize: '14px',
            cursor: 'pointer',
        },
        linkContainer: {
            marginTop: '10px',
        },
        textAndLink: {
            display: 'inline-block',
            fontSize: '14px',
        },
        registerLink: {
            marginLeft: '5px', // Add space between text and link
            color: '#1eb2a6',
            textDecoration: 'none',
            fontSize: '14px',
        },
       // registerLink: {
           // textAlign: 'center',
           // fontSize: '14px',
           // color: '#007bff',
           // textDecoration: 'none',
           // marginTop: '10px',
           // display: 'block',
       // },
    };

    return (
        <div>
            <Header/>
        <Back title='' />
        <div style={styles.container}>
            <h3 style={styles.title}>Login</h3>
            <form onSubmit={handleFormSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <input type="email" style={styles.input} value={loginDetails.username} onChange={(e) => handleChange(e, 'username')} placeholder="Username" required />
                </div>
                <div style={styles.formGroup}>
                    <input type="password" style={styles.input} value={loginDetails.password} onChange={(e) => handleChange(e, 'password')} placeholder="Password" required />
                </div>
                <button type="submit" style={styles.button}>Login</button>
            </form>
            <div style={styles.linkContainer}>
            <span style={styles.textAndLink}>Don't have an account?</span>
            <Link to="/register" style={styles.registerLink} >Register</Link>
        </div>
            
        </div>
        <Footer />
        </div>
    );
};

export default LoginForm;
