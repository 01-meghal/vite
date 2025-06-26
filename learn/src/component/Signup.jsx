import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');
    const[password,setPassword] = useState('');

     const navigate = useNavigate();
    

    const handleSubmit =(e) => {
        e.preventDefault()
        console.log(`>>>>>>>>>`,name);
        const data ={
            name,email,phone,password
        }

        console.log(`>>>>>>data`,data);
        localStorage.setItem("userData",JSON.stringify(data))
        alert('dat save')
        setEmail('')
        setName('')
        setPassword('')
        setPhone('')  
          navigate('/Login');
    }





    return(
        <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <input
            type='text'
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input
            type="text"
            placeholder="enter phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />

            <input
            type="text"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button>Submit</button>
        </form>
    </div>
    )
}

export default Signup