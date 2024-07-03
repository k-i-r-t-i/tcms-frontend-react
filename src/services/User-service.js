import { myAxios } from "./helper"
import axios from 'axios';
//export const signUp=(user)=>{
    //return myAxios.post('http://localhost:8086/api/auth/register',user)
    //.then((response)=>response.data)

//}
/*export const loginUser=(loginDetail)=>{
    return myAxios.post('http://localhost:8086/api/auth/login',loginDetail).then((response)=>response.data)
}*/

export const loginUser=async (loginDetail)=>{
    const response = await myAxios.post('http://localhost:8086/api/auth/login', loginDetail)
    return response.data
}

export const uploadPostImage=async(image, courseId)=>{
    let formData = new FormData();
    formData.append("image", image);
    const response = await axios.post(`http://localhost:8083/api/courses/image/upload/${courseId}`, formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    return response.data
}