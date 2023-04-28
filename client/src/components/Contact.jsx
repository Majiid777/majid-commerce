import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Facebook, Twitter, Instagram, LinkedIn } from "@material-ui/icons";
import "./Contact.css";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [name, setNAme] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const handle=()=>{
    setShow(false)
    setNAme("")
    setEmail("")
    setPhone("")
    setMessage("")

  }
  useEffect(() => {
 
  }, [show])
  

  function importAll(r) {
    let images = {};
    r.keys().map((item) => { return( images[item.replace('./', '')] = r(item)) });
    return images;
  }
  
  const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

        
  return (
    <div class="container p-0 m-0 w-100" style={{ backgroundColor: '#eaeaff'}} >
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

          <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mpznvwre" method="post">
            <h3 class="title" style={{color: '#fff'}}>Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" required="" value={name}/>
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" required="" value={email}/>
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" required="" value={phone}/>
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input" required="" value={message}></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="btn" onClick={() => setShow(true) } />
          </form>
          <div className='alert'>
        <Alert show={show} variant="success">
        <Alert.Heading >Thank you!</Alert.Heading>
        <p>
        Your message has been sent.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => handle()} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
      </div>
        </div>
      </div>
    </div>
  
  );
   

  
}

export default Contact


