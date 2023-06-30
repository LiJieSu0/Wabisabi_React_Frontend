import { useEffect, useState} from 'react';
import { Routes, Route} from 'react-router-dom';

import './css/App.css'
//import components 
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {HomePage} from './components/HomePage';
import {MenuPage} from './components/MenuPage';
import {OrderPage} from './components/OrderComponents/OrderPage';
import { FetchItemsFromServer } from './components/ServerUtil';
import {wholeMenu} from './components/MyContext';
import {CheckoutPage} from './components/OrderComponents/CheckoutPage'
import {AboutPage} from './components/AboutPage';


export default function App(){
  const [menuFetched,setMenuFetched]=useState([]);
  useEffect(()=>{
    async function fetchMenu(){
        let myItems;
        try{
            myItems=await FetchItemsFromServer();
        }catch(e){
            console.log(e);
        }
        setMenuFetched(myItems.Menu_items)
    }
    fetchMenu();
},[])

  return( //Components here
    <div>
      <Header/>
        <wholeMenu.Provider value={menuFetched}>
          <Routes>
            <Route path='/' element={
              <HomePage/>
            }/>
            <Route path='/album' element={
              <MenuPage/>
            }/>
            <Route path='/order' element={
              <OrderPage/>
            }/>
            <Route path='/order/checkout' element={
              <CheckoutPage/>
              }/>
            <Route path='/about' element={
              <AboutPage/>
              }/>
            {/* TODO 404 page route */}
          </Routes>
        </wholeMenu.Provider>
      <Footer/>
    </div>
  );
}
