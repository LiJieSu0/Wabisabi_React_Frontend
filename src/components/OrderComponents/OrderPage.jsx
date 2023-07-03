import { useContext,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderItemCard } from './OrderItemCard';
import { wholeMenu } from '../MyContext';
import {teaImages} from '../FileUtil';
import { ShoppingCartItem } from './ShoppingCart';
import '@styles/OrderPage.css';



export function OrderPage(){
    const [cart,setCart]=useState([]);
    const navigate=useNavigate ();
    const menu=useContext(wholeMenu);
    teaImages['Oolong']=teaImages['Oolong'].replace("/@fs",""); // no idea why @fs occurs in path
    function handleSubmitCart(e){
        e.preventDefault();
        if(cart.length==0){
            alert("No item in the cart!");
            return;
        }
        alert("Direct to checkout page!");
        navigate('/order/checkout',{state:cart});

    }

    return(
        <div className="page-div">
            <div id="order-page-container">
            <div id="item-card-container">
                {menu.map((item)=>(
                    <OrderItemCard key={item._id}
                    item_id={item._id}
                    item_name={item.item_name}
                    single_price={item.price}
                    cart={cart}
                    setCart={setCart}
                    image={teaImages[item.item_name]}
                    />
                    ))}

            </div>
            
            <div id="shopping-cart">
                <h3>Shopping Cart</h3>
                {cart.length==0 &&<h3 id='empty-shopping-cart'>There are currently no items in your cart.</h3>}
                {cart.map((item,index)=>{
                    return(
                        <div key={index}>
                            <ShoppingCartItem 
                                index={index}
                                image={teaImages[item.item_name]}
                                cart={cart}
                                setCart={setCart}
                                item={item}
                            />
                        </div>
                    )})}
                <div id="checkout-btn">
                    <button onClick={handleSubmitCart} id="checkout">Check Out</button>
                </div>
            </div>
            </div>
        </div>
    );}

