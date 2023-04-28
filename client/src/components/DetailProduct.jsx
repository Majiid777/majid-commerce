import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToCart, getOneProduct  } from '../redux/action';
import currencyFormatter from "currency-formatter";
import { Add, Remove } from "@material-ui/icons";
import "./DetailProduct.css";


const DetailProduct = () => {
    //reducer state
    const [quantity, setQuantity] = useState(1);
    const { oneProduct,loading } = useSelector(state => state.product);
    const [result, setResult] = useState();

  
    console.log(oneProduct)
    const dispatch = useDispatch();
    const { _id } = useParams();
    function calculeRemise(prix,remise){
        const prixNumber = parseFloat(prix)
        const remiseNumber = parseFloat(remise) 
        let resulta=0;
        if ((prixNumber && remiseNumber) && (remiseNumber >0)){ 
       resulta=prix*(1-(remise/100))
        return resulta}
      
    }
    

    useEffect(() => {
       dispatch(getOneProduct(_id));
       let result;
       result=parseFloat(calculeRemise(oneProduct.price,oneProduct.promo))
       setResult(result.toFixed(2))
     
   
 
}, [_id,result])

const decQuantity = () => {
    if(quantity > 1) {
        setQuantity(quantity-1)
    }
}

    return (
      
       <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                <div className="details__image">
                    <img src={oneProduct.image} alt=""/>
                </div>
                </div>
                <div className="col-6">
                <div className="details__name">
                    {oneProduct.title}
                </div>
                 
                { (Number(result)>0) ?
                  
                <div className="details__prices">
                <span className="details__actaul">{currencyFormatter.format(oneProduct.price , { code: 'USD' })}</span>
                <span className="details__discount">{currencyFormatter.format(result , { code: 'USD' })}</span>
                </div> :
                <div className="details__prices">
                <span className="details__actaul">{currencyFormatter.format(oneProduct.price , { code: 'USD' })}</span>
                </div>}
                
                <div className="details__info">
                    <div className="details__incDec">
                    <span className="dec" onClick={decQuantity}><Remove/></span>
                    <span className="quantity">{quantity}</span>
                    <span className="inc" onClick={() => setQuantity(quantity+1)}><Add/></span>
                    <button className="btn-default" onClick={()=>dispatch(addToCart(oneProduct._id, 1))}>add to cart</button>
                    </div>
                </div>
                <div className="details__p">
                    <h4>Details</h4>
                    {oneProduct.description}
                </div>
                </div>
            </div>
        </div>
     
    )
}


export default DetailProduct
       
