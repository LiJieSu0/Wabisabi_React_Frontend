import { useContext,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderItemCard } from './OrderItemCard';
import { wholeMenu } from './MyContext';
import {images} from './FileUtil';
import {EditModal} from './EditModal';
// import '../../css/OrderPage.css'



export function OrderPage(){
    const [cart,setCart]=useState([]);
    const [editModalState,setEditModalState]=useState(false);
    const navigate=useNavigate ();
    const menu=useContext(wholeMenu);
    images['Oolong']=images['Oolong'].replace("/@fs",""); // no idea why @fs occurs in path
    function handleSubmitCart(e){
        e.preventDefault();
        if(cart.length==0){
            alert("No item in the cart!");
            return;
        }
        alert("Direct to checkout page!");
        navigate('/order/checkout',{state:cart});

    }
    function handleEdit(){
        //TODO Edit Item
        setEditModalState(!editModalState);
    }
    return(
        <div className="page-div">
            {menu.map((item)=>(
                
                <OrderItemCard key={item._id}
                item_id={item._id}
                item_name={item.item_name}
                single_price={item.price}
                cart={cart}
                setCart={setCart}
                image={images[item.item_name]}
                />
                ))}
            <form onSubmit={handleSubmitCart}>
                <label htmlFor="checkout">Check Out</label>
                <button type="submit" id="checkout">Submit</button>
            </form>
            {cart.length==0 &&<h1> Such Empty</h1>}
            <div id="shopping-cart">
            {cart.map((item,index)=>{
                return(
                    <div key={index}>
                        <p>Item: {item.item_name}</p>
                        <p>Amount: {item.amount}</p>
                        <p>{(item.ice_level)}</p>
                        <p>{(item.sugar_level)}</p>
                        <p>Price: {item.price}</p>
                        <button onClick={handleEdit}>Edit/Remove</button>
                        <EditModal
                            modalState={editModalState}
                            setModalState={setEditModalState}
                            item={item}
                            image={images[item.item_name]}
                        />
                    </div>
                )})}
            </div>
        </div>
    );}

