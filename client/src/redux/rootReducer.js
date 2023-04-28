import { combineReducers } from "redux";
import { cartReducer } from "./reducerCart";
import { productReducer } from "./reducerProduct";
import { userReducer } from "./reducerUser";

const rootReducer= combineReducers({

    userReducer,
    productReducer,
    cartReducer,

});
export default rootReducer;
