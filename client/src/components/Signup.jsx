import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignUp } from '../redux/action';
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Facebook, Twitter, Instagram, LinkedIn } from "@material-ui/icons";
import "./Signup.css";

const Signup = () => {
  const { user, loading } = useSelector((state) => state);
  console.log(loading);
  console.log(user);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adresse, setAdresse] = useState("");
    const [telephone, setTelephone] = useState("");

    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
         e.preventDefault();
         dispatch(userSignUp({fullName,email,password,telephone,adresse}))
    }

function importAll(r) {
    let images = {};
    r.keys().map((item) => { return( images[item.replace('./', '')] = r(item)) });
    return images;
  }
  
  const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));


  return (
<div class='signUp' style={{ backgroundColor: '#FFFFFF',color: '#FFFFFF'}}>
      {loading ? (
        <h1>Loading ...</h1>
      ) :
      localStorage.getItem("token")?  <Navigate to="/" /> 
      
      
      : (

<div class="container p-0 m-0 w-100" style={{ backgroundColor: '#FFFFFF'}} >
      <span class="big-circle"></span>
      <img src={images['shape.png']} class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title" style={{color: '#008080'}}>Let's get in touch</h3>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div class="info">
            <div class="information">
              <img src={images['location.png']} class="icon" alt="" />
              <p>Route de Gabes km 9 Sfax, Tunisia</p>
            </div>
            <div class="information">
              <img src={images['email.png']} class="icon" alt="" />
              <p>maatougui.majid@yahoo.com</p>
            </div>
            <div class="information">
              <img src={images['phone.png']} class="icon" alt="" />
              <p>+216 56702564</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="#">
              <Facebook/>
              </a>
              <a href="#">
              <Twitter/>
              </a>
              <a href="#">
              <Instagram/>
              </a>
              <a href="#">
              <LinkedIn/>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form" style={{ backgroundColor: '#008080' }}>
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" onSubmit={handleSubmit} >
            <h3 class="title" style={{color: '#fff'}}>Register</h3>
            <div class="input-container">
              <input type="text" name="FullName" class="input"  value={fullName} onChange={e=>setFullName(e.target.value)}/>
              <label for="">Full Name</label>
              <span>Full Name</span>
            </div>
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
            <div class="input-container">
              <input type="text" name="Adresse" class="input" value={adresse} onChange={e=>setAdresse(e.target.value)}/>
              <label for="">Adresse</label>
              <span>Adresse</span>
            </div>
            <div class="input-container">
              <input type="text" name="Telephone" class="input" value={telephone} onChange={e=>setTelephone(e.target.value)}/>
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            
            <input type="submit" value="Submit" class="btn"/>
          </form>
       </div>
      </div>
    </div>
    )}






</div>
  )
}

export default Signup