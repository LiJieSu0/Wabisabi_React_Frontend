import {useLocation} from 'react-router-dom';
import {useState} from 'react';
import { SubmitOrderToServer } from './ServerUtil';


export function CheckoutPage(){
    let response;
    const [customerName,setCustomerName]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [email,setEmail]=useState('')
    const cart = useLocation().state;
    async function handleSubmit(e){
        e.preventDefault();
        const order={
            "customer_fullname":customerName,
            "customer_phonenumber":phoneNumber,
            "customer_email":email,
            "order_time":Date.now(),
            "order_schedule_time":Date.now(),
            "order_note":"None",
            "order_items":cart,
            "order_code":"some code generated",
            "order_complete":false,
            "total_price":9999999
        }
        try{
            response=await SubmitOrderToServer(order);
        }catch(e){
            console.log(e);
        }
        console.log(response);
    }
    function handleChange(e){
        switch(e.target.id){
            case "name":
                setCustomerName(e.target.value);
                break;
            case "number":
                setPhoneNumber(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            default:
                break;
        }
    }
    return(
        <div>
            <h1>checkout</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type='text' id="name" value={customerName} onChange={handleChange}/>
                <label htmlFor="number">Phone Number:</label>
                <input type='text' id="number" value={phoneNumber} onChange={handleChange}/>
                <label htmlFor="email">Email:</label>
                <input type='text' id="email" value={email} onChange={handleChange}/>
                <button type="submit">Check Out</button>
            </form>
            {cart.length===0 && "No Todo"}
            {cart.map(item=>(
                <div key={item.item_name}>
                    <h1>{item.item_name}</h1>
                </div>
            ))}
        </div>
    )}