import { useContext, useState } from 'react';
import { SubmitOrderToServer } from './ServerUtil';
import { OrderItemCard } from './OrderItemCard';
import { wholeMenu } from './MyContext';
// import '../../css/OrderPage.css'

export function OrderPage(){
    const menu=useContext(wholeMenu);
    const [cart,setCart]=useState([]);

    async function handleSubmitCart(e){
        e.preventDefault();
        let response;
        try{
            response=await SubmitOrderToServer(cart);
        }catch(e){
            console.log(e);
        }
        console.log(response);
        // alert("You submitted it!");
        //TODO show some message for submit order success
    }

    return(
        <div className="page-div">
            {menu.map((item)=>(
                <OrderItemCard key={item._id}
                item_id={item._id}
                item_name={item.item_name}
                />
                ))}
            <form onSubmit={handleSubmitCart}>
                <label htmlFor="checkout">Check Out</label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );}

