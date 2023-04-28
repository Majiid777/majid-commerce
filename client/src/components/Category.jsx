import { Link } from 'react-router-dom';
import {  Nav } from "react-bootstrap";
import "./Category.css";




const Category = () => {


      
  return (
 <div class = "product-collection">
            <div class = "container">
             <div class = "product-collection-wrapper">

                    {/*-- product col left --*/}
                   <div class = "product-col-left">
                      <div class = "product-col-l-top flex">
                         <div class = "product-col-content">
                            <h2 class = "md-title">Sofa collection </h2>
                            <Nav  >
                            <Nav.Link href='/sofa' ><button type = "button" class = "btn-dark">Shop now</button></Nav.Link>
                            </Nav>
                          </div>
                       </div>

                       <div class = "product-col-l-bottom flex">
                          <div class = "product-col-content">
                             <h2 class = "md-title">Chair collection </h2>
                             <Nav>
                             <Nav.Link href='/chair' ><button type = "button" class = "btn-dark">Shop now</button></Nav.Link>
                             </Nav>

                          </div>
                       </div>
                    </div>

{/*-- product col right --*/}
                    <div class = "product-col-right">
                        <div class = "product-col-r-top flex">
                            <div class = "product-col-content">
                                <h2 class = "md-title">Mobile collection </h2>
                                <Nav>
                                <Nav.Link href='/mobile' ><button type = "button" class = "btn-dark">Shop now</button></Nav.Link>
                                </Nav>
                            </div>
                        </div>

                        <div class = "product-col-r-bottom">
                            {/*-- left --*/}
                            <div class = "flex">
                                <div class = "product-col-content">
                                <h2 class = "md-title">Watch collection </h2>
                                <Nav>
                                <Nav.Link href='/watch' ><button type = "button" class = "btn-dark">Shop now</button></Nav.Link>
                                </Nav>
                                </div>
                            </div>
                            {/*-- right --*/}
                            <div class = "flex">
                                <div class = "product-col-content">
                                    <h2 class = "md-title">Headphones collection </h2>
                                <Nav>
                                <Nav.Link href='/wireless' ><button type = "button" class = "btn-dark">Shop now</button></Nav.Link>
                                </Nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
 );
};

export default Category;