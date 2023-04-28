import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Logine } from '../redux/action';
import { Navigate, Link } from 'react-router-dom';
import "./Login.css";
import Form from 'react-bootstrap/Form';

const Login = () => {
  const { user, loading } = useSelector((state) => state.user);
 



  console.log(user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

  

    
   
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
         e.preventDefault();
         dispatch(Logine({email,password}))

    }


    function importAll(r) {
      let images = {};
      r.keys().map((item) => { return( images[item.replace('./', '')] = r(item)) });
      return images;
    }
    
    const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));


  return (
    <div class='Login w-100' style={{ backgroundColor: '#FFFFFF',color: '#FFFFFF'}}>
          { loading?(<h1>loading.......</h1>):
            localStorage.getItem("token")
            ?  (<Navigate to="/profile" /> )
            
            
            :(

<div class="container p-0 m-0 w-100" style={{ backgroundColor: '#FFFFFF'}} >
      <span class="big-circle"></span>
      <img src={images['shape.png']} class="square" alt="" />
      <div class="form" style={{ backgroundColor: '#008080',marginLeft: '200px' }}>

<form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" onSubmit={handleSubmit}  >
            <h3 class="title" style={{color: '#FFFFFF'}}>Login</h3>
           
            <div class="input-container">
              <input type="email" name="email" class="input"  value={email} onChange={e=>setEmail(e.target.value)}/>
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="password" name="password" class="input" value={password} onChange={e=>setPassword(e.target.value)}/>
              <label for="">Password</label>
              <span>Password</span>
            </div>
           
           
            
            <input type="submit" value="Login" class="btn"/>
            <hr />
            <Form.Text className="text-muted" style={{ color: '#FFFFFF' }}>
             Don't have a Account <Link to="/Signup"> Create Now </Link>
              </Form.Text>
            
          </form>
</div> 
</div> 







         






 )
}
    </div> )
}

export default Login
