import axios from "axios";

import { CARD_ADD_ITEM, CARD_ADD_ITEM_FAIL, CARD_ADD_ITEM_SUCCESS, CARD_REMOVE_ITEM,INCREMENT, DECREMENT, DETAILPRODUCT_FAIL, DETAILPRODUCT_SUCCESS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS, GET_ALLUSERS, DELETEUSER, BLOCKUSER } from "./actionTypes"
import {ADDPRODUCT, ADDPRODUCT_FAIL, ADDPRODUCT_SUCCESS, DELETEPRODUCT, DETAILPRODUCT, GETPRODUCTS, GET_SOFA_PRODUCT, GET_CHAIR_PRODUCT, GET_MOBILE_PRODUCT, GET_WATCH_PRODUCT, GET_WIRELESS_PRODUCT, UPDATEPRODUCT} from "./actionTypes"

//////////////////////////// action user////////////////////////
export const userSignUp=(newUser)=>async(dispatch)=>{
    dispatch({type:SIGN_UP});
    try {
        const res=await axios.post("/user/signUp",newUser);
       
        dispatch({
            type:SIGN_UP_SUCCESS,
            payload:res.data

        });
    } catch (error) {
        dispatch({
            type: SIGN_UP_FAIL,
            payload: error.response.data
        })
        
    }
}

export const Logine=(user)=>async(dispatch)=>{
    dispatch({type:LOGIN});
    try {
        const res=await axios.post("/user/signIn",user)
        localStorage.setItem("token",res.data.token)
        console.log(res);
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data
        })
        
    }

}

export const getUserProfile=()=>async(dispatch)=>{
    dispatch({
        type:GET_PROFILE
    })
    const token=localStorage.getItem("token");
    const config={
        headers:{
            Authorization:token
        }
    }
    try {
        const res=await axios.get("/user/auth",config)
        // console.log(res.data)
        dispatch({
            type:GET_PROFILE_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:GET_PROFILE_FAIL,
            payload: error.response.data,
        })
    }
}
//get all users
export const getAllUsers = () => async(dispatch) => {
  try {
    const res = await axios.get("/user/getAllUser");
    dispatch (
      {
      type : GET_ALLUSERS,
      payload : res.data
      }
    );
  } catch (error) {
    alert("get all users error")
  }
};


//delete user
export const removeUser = (_id) => async(dispatch) => {
  try {
    const res = axios.delete(`/user/deleteOneUser/${_id}`);
    dispatch(
      {
        type : DELETEUSER,
        payload : res.data
      }
    )
  } catch (error) {
    alert("delete user error")
  }
}

//edit user
export const editeUser = (user) => async(dispatch) => {
  try {
      const res = await axios.put(`/user/updateUser/${user._id}`, user);
      dispatch(
          {
              type : BLOCKUSER,
              payload : res.data
          }
      )
  } catch (error) {
      alert("update user error");
  }
};


//log out
export const userLogOut = () => {

    localStorage.clear()
  document.location.href='/';
  
  return {
    type: LOGOUT
  }
  
  }


  //////////////////////////// action product////////////////////////
// add product 
export const createProduct = (newProduct) => async (dispatch) => {
    dispatch({ type: ADDPRODUCT });
    try {
      const res = await axios.post("/product/addProduct", newProduct);
      dispatch({
        type: ADDPRODUCT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ADDPRODUCT_FAIL,
        payload: error.response.data,
      });
    }
  };

//get all products
export const getAllProducts = () => async(dispatch) => {
  try {
    const res = await axios.get("/product/getAllProduct");
    dispatch (
      {
      type : GETPRODUCTS,
      payload : res.data
      }
    );
  } catch (error) {
    alert("get all products error")
  }
};

//get sofa products
export const getSofaProd = () => async(dispatch) => {
  try {
    const res = await axios.get("/product/getSofaProducts");
    dispatch (
      {
      type : GET_SOFA_PRODUCT,
      payload : res.data
      }
    );
  } catch (error) {
    alert("get Sofa products error")
  }
};

//get chair products
export const getChairProd = () => async(dispatch) => {
  try {
    const res = await axios.get("/product/getChairProducts");
    dispatch (
      {
      type : GET_CHAIR_PRODUCT,
      payload : res.data
      }
    );
  } catch (error) {
    alert("get Chair products error")
  }
};


//get mobile products
export const getMobileProd = () => async(dispatch) => {
  try {
    const res = await axios.get("/product/getMobileProducts");
    dispatch (
      {
      type : GET_MOBILE_PRODUCT,
      payload : res.data
      }
    );
  } catch (error) {
    alert("get Mobile products error")
  }
};


//get watch products
export const getWatchProd = () => async(dispatch) => {
  try {
    const res = await axios.get("/product/getWatchProducts");
    dispatch (
      {
      type : GET_WATCH_PRODUCT,
      payload : res.data
      }
    );
  } catch (error) {
    alert("get Watch products error")
  }
};

//get wireless products
export const getWirelessProd = () => async(dispatch) => {
  try {
    const res = await axios.get("/product/getWirelessProducts");
    dispatch (
      {
      type : GET_WIRELESS_PRODUCT,
      payload : res.data
      }
    );
  } catch (error) {
    alert("get Wireless products error")
  }
};



//get one product
export const getOneProduct = (_id) => async(dispatch) => {
  dispatch(
    {
      type : DETAILPRODUCT,
     
    }
  )
  try {
    const res = await axios.get(`/product/getOneProduct/${_id}`);
    dispatch(
      {
        type : DETAILPRODUCT_SUCCESS,
        payload : res.data
      }
    )
  
  } catch (error) {
    dispatch({
      type:DETAILPRODUCT_FAIL,
      payload:error.response.data
    })
  }
}

//edit product
export const editeProduct = (product) => async(dispatch) => {
  try {
      const res = await axios.put(`/product/updateProduct/${product._id}`, product);
      dispatch(
          {
              type : UPDATEPRODUCT,
              payload : res.data
          }
      )
  } catch (error) {
      alert("update product error");
  }
};

//delete product
export const removeProduct = (_id) => async(dispatch) => {
  try {
    const res = axios.delete(`/product/deleteOneProduct/${_id}`);
    dispatch(
      {
        type : DELETEPRODUCT,
        payload : res.data
      }
    )
  } catch (error) {
    alert("delete product error")
  }
}


//////////////////////////// action cart////////////////////////

// add to cart 
export const addToCart = (_id, qty) => async (dispatch) => {
    dispatch({type : CARD_ADD_ITEM})
    try {
      const { data } = await axios.get(`/product/getOneProduct/${_id}`);
      dispatch({
        type: CARD_ADD_ITEM_SUCCESS,
        payload: {
          product: data,
          qty,
        },
      });
    } catch (error) {
      dispatch({
        type: CARD_ADD_ITEM_FAIL,
        payload: error.data,
      });
    }
  };
  
  
  // delete item from cart 
  export const removeFromCart = (_id) => (dispatch) => {
    dispatch({
      type: CARD_REMOVE_ITEM,
      payload: _id,
    });
  };
  
  
  
  // incrementer
  export const incrementQty = (cartItem) => (dispatch) => {
    dispatch(
      {
        type: INCREMENT,
        payload: cartItem
      }
    )
  }; 
  
  // decrementer 
  export const decrementQty = (cartItem) => (dispatch) => {
    dispatch(
      {
        type: DECREMENT,
        payload: cartItem,
      }
    )
  };