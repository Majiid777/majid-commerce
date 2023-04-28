import { useDispatch, useSelector } from 'react-redux';
import "./ProductCard.css";
import { Link } from 'react-router-dom';
import { addToCart, getAllProducts, removeProduct } from '../redux/action';
import { ZoomIn, AddCircle, StarHalf, StarRate } from "@material-ui/icons";
import UpdateProduct from './UpdateProduct';
import {  useEffect, useState } from 'react';




const ProductCard = ({product}) => {
    const { user } = useSelector((state) => state.user);
    const [result, setResult] = useState();


    // console.log(user);
    const dispatch = useDispatch();

    function calculeRemise(prix,remise){
        const prixNumber = parseFloat(prix)
        const remiseNumber = parseFloat(remise) 
        let resulta=0;
        if ((prixNumber && remiseNumber) && (remiseNumber >0)){ 
       resulta=prix*(1-(remise/100))
        return resulta}
      
    }
    useEffect(() => {
        let result;
        result=parseFloat(calculeRemise(product.price,product.promo))
        setResult(result.toFixed(2))
      
    }, [result])

    
    


  return (

 <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                                <img src={product.image} alt="wait for data" />
                            </div>
                            {user && user.userRole === "admin" ? 
                            <div className="btns_admin1">
                           
                            <button type = "button" class = "btn-cart" onClick={() => { dispatch(removeProduct(product._id)); dispatch(getAllProducts()) }}> delete
                            </button>
                            <UpdateProduct updateProd={product} />
                            <Link to={`/detailProduct/${product._id}`}> <button type = "button" class = "btn-buy">
                      <ZoomIn />
                                </button></Link>
                            </div> :
         
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart" onClick={()=>dispatch(addToCart(product._id, 1))}> add to cart
                                    <AddCircle />
                                </button>
                                <Link to={`/detailProduct/${product._id}`}>
                                <button type = "button" class = "btn-buy"> zoom
                                    <ZoomIn />
                                </button></Link>
                            </div>}
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 class = "sm-title">lifestyle</h2>
                                <div class = "rating" style={{ color: '#00CC99'}}>
                                    <StarRate/>
                                    <StarRate/>
                                    <StarRate/>
                                    <StarRate/>
                                    <StarHalf/>
                                </div>
                            </div>
                            <a href = "#" class = "product-name">{product.title}, new product</a>
                             { (Number(result)>0)?
                           <div>
                            <p class = "product-price">{`$ ${product.price}`}</p>
                            <p class = "product-price"> {`$ ${result}`}</p>
                           </div>:
                             <p class = "product-price">{`$ ${product.price}`}</p>}
                          </div>
                       
                        { (Number(result)>0)?
                        <div class = "off-info">
                            <h2 class = "sm-title">{`${product.promo}% off `}</h2>
                        </div>:null}
                    </div>

)
}
export default ProductCard