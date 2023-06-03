import { useEffect, useState } from 'react';
import { SubmitOrderToServer,FetchItemsFromServer } from './ServerUtil';
// import '../../css/OrderPage.css'
import { OrderItemCard } from './OrderItemCard';
import { Modal } from './Modal'


export function OrderPage(){
    const [text, setText] = useState(''); //state for test only
    const [cart,setCart]=useState([]);
    const [menu, setMenu]=useState([]);
    const [item_readyToCart, setItem_readyToCart]=useState([]);

    const controlValue=true;
    useEffect(()=>{
        async function fetchMenu(){
            let myItems;
            try{
                myItems=await FetchItemsFromServer();
            }catch(e){
                console.log(e);
            }
            setMenu(myItems.Menu_items);
        }
        fetchMenu();
    },[])
    const handleChange = (event) => {
        setText(event.target.value);
    }



    function handleItemBt(e){
        let item_putTmp=e.target.id.split('_')[0];
        let action=e.target.id.split('_')[1];
        console.log(item_putTmp);
        console.log(action);
        setItem_readyToCart([...item_readyToCart,
            {
                item_putTmp:item_putTmp
                
            }
        ])

    }


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
            <Modal />
            {menu.map((item)=>(
                <OrderItemCard key={item._id}
                    item_id={item._id}
                    item_name={item.item_name}
                    controlValue={controlValue}
                />
            ))}
            <form onSubmit={handleSubmitCart}>
                <label htmlFor="checkout">Check Out</label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );}

