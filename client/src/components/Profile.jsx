import React, { useEffect } from "react";


import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/action";
import ListProduct from "./ListProduct";
// import BlockUi from 'react-block-ui';
// import 'react-block-ui/style.css';



export const Profile = ({products}) => {
  const { user, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
 console.log(user)


  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

 
  return (
   
    <div>
      <div className="divProfile">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <div>{user && <h1>{`Hello ${user.fullName}`}</h1>}</div>
            <ListProduct products={products}/>
          </div>
        )}
      </div>
    </div>
  );
};