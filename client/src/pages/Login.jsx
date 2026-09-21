import { useState } from "react";
import {login} from "../services/authServices.js";
import "./Auth.css"
import { Link } from "react-router-dom";
function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            const response = await login(email,password);
            const {token,user} = response;
            localStorage.setItem("token",token);
            localStorage.setItem("user",user);
            
        }catch(error){
            console.log(error);
            setError(error.response?.data?.message)
        }finally{
            setLoading(false);
        }
    }
    if(loading){
        return <h2 className="loading">Loading</h2>
    }
    return(
       <div className="main-page">
        <div className="card">
            <h3>Login</h3>
            <p>Welcome to DevVault</p>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter User Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter User Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <Link to="/register">Register</Link>
                <button type="submit" disabled={loading}>{loading ? "Logging..." : "Login"}</button>
            </form>
        </div>
       </div>
    )
}

export default Login;