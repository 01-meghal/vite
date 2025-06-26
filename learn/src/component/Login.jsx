import React, {useState} from "react";
import { useNavigate } from "react-router-dom";




const Login = () =>{
    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');
    const navigate = useNavigate();

    

    const handleSubmit = (e) =>{
        

        e.preventDefault()
        const userDetail = JSON.parse(localStorage.getItem('userData'))
        console.log(`>>>>>>>>>>>userDetail`,userDetail);

        if(userDetail.email === email && userDetail.password === password){
            alert('login succesfully')
        setEmail('')
        setPassword('')
       
        }else{
            alert('invalid crediantial')
        }
    }

        const handleLogout =(e) => {
            localStorage.clear('userData')
            alert("Logged out and localStorage cleared!");
            navigate('/Signup');
        }
        
        
        
     


return(
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input
            type="text"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleLogout}>Logout</button>
        </form>
    </div>
)
}

export default Login