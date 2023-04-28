import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import WirelessProdCard from "./WirelessProdCard";
import { Col, Container, Row } from "react-bootstrap";
import { getWirelessProd } from "../redux/action";
import { Link } from "react-router-dom";


const ListWirelessProd = ({products}) => {
  // const { products } = useSelector((state) => state.product);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWirelessProd());
  }, [dispatch]);

  return (
    <div >
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col lg={true} sm={10}>
            <div className="listProduct">
            <h2 className='ourproducts'><i class="fa-brands fa-product-hunt"></i> Wireless</h2>
                    <div className='categorie'>
                        <ul>
                        <Link to="/" style={{color:"black",textDecoration: "none"}}><li>All products  </li></Link> 
                        <Link to="/sofa" style={{color:"black" ,textDecoration: "none"}}><li>Sofa </li></Link>
                        <Link to="/chair" style={{color:"black" ,textDecoration: "none"}}><li>Chair</li></Link>
                        <Link to="/mobile" style={{color:"black" ,textDecoration: "none"}}><li>Mobile</li></Link>
                        <Link to="/watch" style={{color:"black" ,textDecoration: "none"}}><li>Watch</li></Link>
                        <Link to="/wireless" style={{color:"black" ,textDecoration: "none"}}><li>Wireless</li></Link>
                        </ul>
                    </div>
              {products &&
                React.Children.toArray(
                  products.map((el) => <WirelessProdCard kit={el} />)
                )}
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListWirelessProd