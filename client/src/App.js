import React from "react";
import './App.css';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Profile } from './components/Profile';
import { useSelector } from 'react-redux';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import ListProduct from './components/ListProduct';
import ListSofaProd from './components/ListSofaProd';
import ListChairProd from './components/ListChairProd';
import ListMobileProd from './components/ListMobileProd';
import ListWatchProd from './components/ListWatchProd';
import ListWirelessProd from './components/ListWirelessProd';
import DetailProduct from './components/DetailProduct';
import CartItems from './components/CartItems'
import Annonce from './components/Annonce';
import ContactUs from './components/ContactUs';
import Fouter from './components/Fouter'
import Checkout from './components/Checkout';
import { useState } from 'react';





function App() {
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.product);

  const [searching, setSearching] = useState("")
  //edit search
  const handleSearch=(y)=>setSearching(y);


  return (
    <div className="App" style={{ backgroundColor: '#FFFFFF'}}>
      <Router>
        <Annonce/>
      <Dashboard searching={searching} handleSearch={handleSearch}/>
      {user && user.userRole === "admin" ? <AddProduct /> : null }
       <Routes>
         <Route path="/" element={<div>

          <ListProduct products={products.filter(el=>el.title.toLocaleLowerCase().includes(searching.toLocaleLowerCase()))} />
         
         </div>
                                  }/>
         <Route path="/Signup" element={<Signup/>}  />
         <Route path="/login" element={<Login/>}  />
         <Route path="/About" element={<About/>}  />
         <Route path="/Services" element={<Services/>}  />
         <Route path="/Contact" element={<Contact/>}  />
         <Route path="/profile" element={<Profile products={products.filter(el=>el.title.toLocaleLowerCase().includes(searching.toLocaleLowerCase()))}/>}/>  
         <Route path="/sofa" element={<ListSofaProd products={products.filter(el=>el.title.toLocaleLowerCase().includes(searching.toLocaleLowerCase()))}/>} />
         <Route path="/chair" element={<ListChairProd products={products.filter(el=>el.title.toLocaleLowerCase().includes(searching.toLocaleLowerCase()))}/>} />
         <Route path="/mobile" element={<ListMobileProd products={products.filter(el=>el.title.toLocaleLowerCase().includes(searching.toLocaleLowerCase()))}/>} />
         <Route path="/watch" element={<ListWatchProd products={products.filter(el=>el.title.toLocaleLowerCase().includes(searching.toLocaleLowerCase()))}/>} />
         <Route path="/wireless" element={<ListWirelessProd products={products.filter(el=>el.title.toLocaleLowerCase().includes(searching.toLocaleLowerCase()))}/>} />
         <Route path="/detailProduct/:_id" element={<DetailProduct />} />
         <Route path="/cart" element={<CartItems/>}/>
         <Route path="/Checkout" element={<Checkout/>}/>



       </Routes>
      
       
     </Router>
      
    </div>
  );
}

export default App;

