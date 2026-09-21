
import { useState } from "react";
import {register} from "../services/authServices.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Auth.css"
function Register(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        try{
              await register(name,email,password);
            navigate("/login");
        }catch(error){
            console.log(error);
            setError(error.response?.data?.message || "Registration Failed")
        }finally{
            setLoading(false);
        }
    }
    return(
       <div className="main-page">
        <div className="card">
            <h3>Register</h3>
            <p>Welcome to DevVault</p>
            {error && (<p className="error-message">{error}</p>)}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter User Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter User Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="Password" placeholder="Enter User Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <Link to="/login">Login</Link>
                <button type="submit" disabled={loading}>{loading ? "Registering.." : "Register"}</button>
            </form>
        </div>
       </div>
    )
}

export default Register;