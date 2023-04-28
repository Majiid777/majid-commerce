import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./Dashboard.css";
import { getUserProfile, userLogOut } from '../redux/action';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Search, AccountCircle, ExitToApp, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";





const Dashboard = ({searching,handleSearch}) => {
  
  const { user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUserProfile());
  }, [dispatch]);

  function importAll(r) {
    let images = {};
    r.keys().map((item) => { return( images[item.replace('./', '')] = r(item)) });
    return images;
  }
  
  const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

  return (
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img src={images['logo1.jpg']} alt="logoimage" style={{width: '70px', height: '70px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className="searching">
            <div className="lawej"style={{  height: '50px', marginLeft: '-28px', marginTop: '-18px' }} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searching}
              onChange={e=>handleSearch(e.target.value)}
              style={{width: '170px',border: 'none'}}
            />
            <Search style={{ color: "#008080", fontSize: 26,marginLeft: '178px', marginTop: '-59px' }}/> 
           </div>
          </Form>
           
           
          <Nav style={{ display: 'flex',  alignItems: 'center',justifyContent: 'center', fontWeight: 'bold', color: '#008080',marginLeft: '230px'  }}>
            <Nav.Link href="/" style={{color: '#008080' }} >Home</Nav.Link>
            <Nav.Link href="/About" style={{color: '#008080' }} >About Us</Nav.Link>
            <Nav.Link href="/Services" style={{color: '#008080' }} >Services</Nav.Link>
            <Nav.Link href="/Contact" style={{color: '#008080' }} >Contact Us</Nav.Link>
            </Nav>
            
          </Nav>
          <Nav >
          <div className="all_nave" style={{display: 'flex', justifyContent: 'space-evenly'}}>

{user ? <div className="nave"  >

    <div className="signUp">
        <Nav>
            <Nav.Link id="username" ><AccountCircle/> {user.fullName} </Nav.Link>
        </Nav>
    </div>



    <div className="login">
        <Nav>
            <Nav.Link id="logout"onClick={() => dispatch(userLogOut())} > <ExitToApp style={{ color: '#008080' }}/></Nav.Link>
        </Nav>
    </div>

</div> : <div className="nave">
    <div className="signUp">
        <Nav>
            <Nav.Link href='/signUp' ><button className='btn solid'>Register</button></Nav.Link>
        </Nav>
    </div>

    <div className="login">
        <Nav>
            <Nav.Link href='/login'><button className='btn transparent'>Login</button></Nav.Link>
        </Nav>
    </div>

</div>}

{ user && user.userRole !== "admin"? (
<Nav.Link href="/cart">
  <Nav style={{ display: 'flex',marginTop:'20px'}}>
    <Nav className='cartCount' style={{ display: 'flex',alignContent: 'center', fontWeight: 'bold', color: '#008080'}} >
      <button className='btn'><div className='count' style={{fontWeight: 'bold', color: '#008080'}}>{Object.keys(cartItems).length}</div>
      <ShoppingCartOutlined style={{ color: '#008080', fontSize: 35 }} /></button>       
    </Nav>        
  </Nav>
</Nav.Link>
) : null }

</div>
          </Nav>        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}
export default Dashboard

