import { useContext,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderItemCard } from './OrderItemCard';
import { wholeMenu } from './MyContext';
// import '../../css/OrderPage.css'



export function OrderPage(){
    const [cart,setCart]=useState([]);
    const navigate=useNavigate ();
    const menu=useContext(wholeMenu);
    function handleSubmitCart(e){
        e.preventDefault();
        if(cart.length==0){
            alert("No item in the cart!");
            return;
        }

        alert("Direct to checkout page!");
        navigate('/order/checkout',{state:cart});
        //TODO show some message for submit order success
    }

    //TODO show the current cart items
    return(
        <div className="page-div">
            {menu.map((item)=>(
                <OrderItemCard key={item._id}
                item_id={item._id}
                item_name={item.item_name}
                single_price={item.price}
                cart={cart}
                setCart={setCart}
                />
                ))}
            <form onSubmit={handleSubmitCart}>
                <label htmlFor="checkout">Check Out</label>
                <button type="submit">Submit</button>
            </form>
            {cart.length==0? (<h1>No data </h1>):( <h1>{cart[0].ice_level}</h1>)}
        </div>
    );}

