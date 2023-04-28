import React from 'react';
import { Add, Remove } from "@material-ui/icons";
import { useDispatch } from 'react-redux';
import { decrementQty, incrementQty } from '../redux/action';
import "./ItemQty.css";


const ItemQty = ({ el, oneProduct }) => {

  

  const dispatch = useDispatch();

  return (
<div className="details__info">
                  { el.qty > 1 ?

                    <div className="details__incDec">
                    <span className="dec" onClick={ () => dispatch(decrementQty(el))}><Remove/></span>
                    <span className="quantity">{el.qty}</span>
                    <span className="inc" onClick={ () => dispatch(incrementQty(el))}><Add/></span>
                    
                    </div> :
                    <div className="details__incDec">
                    <span className="dec" ><Remove/></span>
                    <span className="quantity">{el.qty}</span>
                    <span className="inc" onClick={ () => dispatch(incrementQty(el))}><Add/></span>
                    
                    </div> }
                </div>
);
};

export default ItemQty;