import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/action';
import {  Carousel, Container, Button, Nav } from "react-bootstrap";
import ProductCard from './ProductCard';
import TableProductAdmin from './TableauProductAdmin';
import { Link } from 'react-router-dom';
import ContactUs from './ContactUs';
import Fouter from './Fouter';
import "./ListProduct.css";
import Category from './Category';




const ListProduct = ({ products }) => {
    //store
  // const { products } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);

  
//   console.log(products);


  //dispatch getallproducts
  const dispatch = useDispatch();

  
    useEffect(() => {
        dispatch(getAllProducts());
        
      }, []);


      function importAll(r) {
        let images = {};
        r.keys().map((item) => { return( images[item.replace('./', '')] = r(item)) });
        return images;
      }
      
      const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));
      
      

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      
       { user && user.userRole === "admin" ?
      <TableProductAdmin product={products} />:
      <div>

        <div className="carousels">
          <Carousel variant="dark" fade>
            <Carousel.Item style={{ color: "black" }}>
              <img
                className="d-block w-100"
                style={{ height: "80vh",opacity:'0.9' }}
                src={images['rm417-e136-mockup.jpg']}
                alt="First slide"
              />
              <Carousel.Caption >
                <h3 style={{fontSize:'28px',color:'white', fontFamily:"Arial, Helvetica, sans-serif", fontWeight: 'bold'}}>Sofa Products </h3>
                <p style={{fontSize:'22px',color:'white'}}> Shop for our collection of sofa online</p>
                <Nav className="cool" >
<Nav.Link href='/sofa' ><button className='btn solid' >SHOP NOW</button></Nav.Link>
</Nav>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "80vh",opacity:'0.8' }}
                src={images['salon-chic-moderne-style-esthetique-luxe-dans-tons-bleus.jpg']}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 style={{fontSize:'28px',color: "white",fontFamily:"Arial, Helvetica, sans-serif", fontWeight: 'bold'}}>Chair Products </h3>
                <p style={{fontSize:'22px',color: "white"}}>
                Shop for our collection of sofa online
                </p>
                <Nav className="cool">
<Nav.Link href='/wireless' ><button className='btn solid'>SHOP NOW</button></Nav.Link>
</Nav>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "80vh",opacity:'0.8' }}
                src={images['rendu-3d-maquette-cadre-dans-salon-canape.jpg']}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 style={{fontSize:'28px',color: "white",fontFamily:"Arial, Helvetica, sans-serif", fontWeight: 'bold'}}>Mobile Products </h3>
                <p style={{fontSize:'22px',color: "white"}}>
                Shop for our collection of Chair online
                </p>
                <Nav className="cool">
<Nav.Link href='/chair' ><button className='btn solid'>SHOP NOW</button></Nav.Link>
</Nav>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "80vh",opacity:'0.8' }}
                src={images['preparation-aux-repetitions-montre-du-marie-portee-main.jpg']}
                alt="Fourth slide"
              />

              <Carousel.Caption>
                <h3 style={{fontSize:'28px',color: "white",fontFamily:"Arial, Helvetica, sans-serif", fontWeight: 'bold'}}>Watch Products </h3>
                <p style={{fontSize:'22px',color: "white"}}>
                Shop for our collection of Watch online
                </p>
                <Nav className="cool">
<Nav.Link href='/watch' ><button className='btn solid'>SHOP NOW</button></Nav.Link>
</Nav>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "80vh",opacity:'0.8' }}
                src={images['composition-elegante-du-smartphone.jpg']}
                alt="Fifth slide"
              />

              <Carousel.Caption>
                <h3 style={{fontSize:'28px',color: "white",fontFamily:"Arial, Helvetica, sans-serif", fontWeight: 'bold'}}>Wireless Products </h3>
                <p style={{fontSize:'22px',color: "white"}}>
                Shop for our collection of Mobile online
                </p>
                <Nav className="cool">
<Nav.Link href='/mobile' ><button className='btn solid'>SHOP NOW</button></Nav.Link>
</Nav>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div id="brand" class="container">
        <div class="row m-0 py-5">
        <img class="img-fluid col-lg-2 col-md-4 col-6" src={images['7.jpg']} alt="first brand"/>
        <img class="img-fluid col-lg-2 col-md-4 col-6" src={images['2.jpg']} alt="second brand"/>
        <img class="img-fluid col-lg-2 col-md-4 col-6" src={images['3.jpg']} alt="third brand"/>
        <img class="img-fluid col-lg-2 col-md-4 col-6" src={images['4.jpg']} alt="fourth brand"/>
        <img class="img-fluid col-lg-2 col-md-4 col-6" src={images['5.jpg']} alt="fifth brand"/>
        <img class="img-fluid col-lg-2 col-md-4 col-6" src={images['6.jpg']} alt="six brand"/>
        </div>
        </div>

        <Container class="w-100">
              <div className="row m-0 p-0" >
                
                  <div className="listProduct" style={{display: 'flex', marginLeft: '20px', backgroundColor: '#FFFFFF' }}>
                    <div class="product-collection">
                    <Category/>
                    </div>

                    <div id="featured" class="my-5 pb-5" >
                   
                    <h3 style={{fontWeight: 'bold', color: '#008080' }}>Our Featured</h3>
                    
                    <div style={{borderTop: '2px solid gray'}}></div>
                    <p>Here you can check out our new products with fair price on B-Shop.</p>
                    </div>
                    </div>
                  

                <div class="container" >
                  <div class="product-items">
                  {products && React.Children.toArray(
                        products.map((el) => <ProductCard product={el} />)
                      )}
                  </div> 
                </div>

              </div>
                  

            </Container>
            
            <ContactUs/>
            <Fouter/>
      </div>
      }

    </div>
  )
}

export default ListProduct