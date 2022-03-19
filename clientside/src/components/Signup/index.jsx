import styles from "./styles.module.css";
//import axios from 'axios';
import{Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

const Signup = () => {
    const[data,setData] = useState({
        name: "",
        email: "",
        password: ""
    })    
    const [error,setError] = useState("");
    const handleChange = ({ currentTarget:input }) =>{
        setData({...data,[input.name]: input.value})
    }
    //connecting backend and frontend
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const url = "/api/register";
            const res = await axios.post(url,data);
            localStorage.setItem("token", res.data.token);
            window.location = "/";
            //console.log(res);
        }
    catch(error){
        
            setError(error.response.data.msg)
        

    }
}
    return(
        
        <div className={styles.signup_container}>  
         <div className={styles.left}>
         <h1>Welcome to the Website</h1>
         <Link to="/login">
             <button type="button" className={styles.the_btn}>
                 Sign in
             </button>
         </Link>
         </div>
         <div className={styles.right}>
             <form className={styles.form_container} onSubmit={handleSubmit}>
                 <h1>Create Account</h1>
                 <input type="text"
                  placeholder='username'
                  name='name'
                  onChange={handleChange}
                  value = {data.userName}
                  required
                  className={styles.input}
                 />
                 <input type="email"
                  placeholder='Email'
                  name='email'
                  onChange={handleChange}
                  value = {data.email}
                  required
                  className={styles.input}
                 />
                 <input type="password"
                  placeholder='Password'
                  name='password'
                  onChange={handleChange}
                  value = {data.password}
                  required
                  className={styles.input}
                 />
                 {error && <div className={styles.error_msg}>error</div>}
                 <button type="submit" className={styles.submit_btn}>
                     Sign Up
                 </button>
             </form>
         </div>
        </div>
    )
};

export default Signup;