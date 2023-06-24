import {useLocation} from 'react-router-dom';
import {useState} from 'react';
import { SubmitOrderToServer } from './ServerUtil';
import { useNavigate } from 'react-router-dom';


export function CheckoutPage(){
    let response;
    const navigate=useNavigate ();
    const [customerName,setCustomerName]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [email,setEmail]=useState('')
    const [notes,setNotes]=useState('')
    const cart = useLocation().state;
    async function handleSubmit(e){
        e.preventDefault();
        let total_price=cart.reduce((total,item)=>{
            return total+item.price;
        },0);
        console.log(total_price);
        const order={
            "customer_fullname":customerName,
            "customer_phonenumber":phoneNumber,
            "customer_email":email,
            "order_time":Date.now(),
            "order_schedule_time":Date.now(),
            "order_note":notes,
            "order_items":cart,
            "order_code":"some code generated",
            "order_complete":false,
            "total_price":total_price
        }
        try{
            response=await SubmitOrderToServer(order);
        }catch(e){
            console.log(e);
        }
        alert("Order Succesed");
        //TODO redirect to home page
        navigate('/order');
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
            case "notes":
                setNotes(e.target.value);
                break;
            default:
                break;
        }
    }
    function customizeOptions(options){
        let optArr=options.split('_');
        let str=""
        switch(optArr[0]){
            case "regular":
                str+="Regular ";
                break;
            case "less":
                str+="Less ";
                break;
            case "half":
                str+="Half ";
                break;
            case "little":
                str+="Little ";
                break;
            case "no":
                str+="No ";
                break;
            default:
                break;
        }
        if(optArr[1]==='ice'){
            return str+="Ice";
        }
        if(optArr[1]==='sugar'){
            return str+="Sugar";
        }
    }
    return(
        <div>
            <h1>Checkout Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type='text' id="name" value={customerName} onChange={handleChange}/>
                    <label htmlFor="number">Phone Number:</label>
                    <input type='text' id="number" value={phoneNumber} onChange={handleChange}/>
                    <label htmlFor="email">Email:</label>
                    <input type='text' id="email" value={email} onChange={handleChange}/>
                    <label htmlFor="notes">Notes:</label>
                    <input type="text" id="notes" value={notes} onChange={handleChange}></input>
                </div>
            <div id="order-list">
                {cart.length===0 && "No Todo"}
                {cart.map(item=>(
                    <div key={item.item_name}>
                        <h1>Item: {item.item_name}</h1>
                        <h1>Amount: {item.amount}</h1>
                        <h1>{customizeOptions(item.ice_level)}</h1>
                        <h1>{customizeOptions(item.sugar_level)}</h1>
                        <h1>Price: {item.price}</h1>
                        <hr style={{ backgroundColor: 'black', height: '0.5px'}}/>
                    </div>
                ))}
            </div>
            <button type="submit">Check Out</button>
            </form>
        </div>
    )}