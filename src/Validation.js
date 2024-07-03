export default function Validation(data){
    const errors={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    //const password_pattern=/^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{8,}$/;
    if(data.salutation.trim()===""){
        errors.salutation="Salutation is required!";
    } 
    if(data.first_name.trim()===""){
        errors.first_name="First Name is required!";
    } 
    if(data.last_name.trim()===""){
        errors.last_name="last name is required!";
    } 
    if(data.tel_code.trim()===""){
        errors.tel_code="Tel Code is required!";
    } 
    if(data.mobile.trim()===""){
        errors.mobile="mobile no. is required!";
    }    
    if(data.email.trim()===""){
        errors.email="Email is required!";
    }   
    if(data.username.trim()===""){
        errors.username="username is required!";
    } 
    if(data.password.trim()===""){
        errors.password="password is required!";
    } 
    if(data.passwordHint.trim()===""){
        errors.passwordHint="passwordHint is required!";
    } 
    if(data.security_ques_1.trim()===""){
        errors.security_ques_1="security ques. 1 is required!";
    } 
    if(data.security_ans_1.trim()===""){
        errors.security_ans_1="security ans. 1 is required!";
    }
    if(data.security_ques_2.trim()===""){
        errors.security_ques_2="security ques. 2 is required!";
    } 
    if(data.security_ans_2.trim()===""){
        errors.security_ans_2="security ans. 2 is required!";
    }  
    else if(!email_pattern.test(data.email)){
        errors.email="Email is not correct";
    }
    return errors;
}
