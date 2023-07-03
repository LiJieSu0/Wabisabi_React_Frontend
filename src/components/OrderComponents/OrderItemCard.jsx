import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import {OrderModal} from './OrderModal'

import '@styles/OrderItemCard.css'


OrderItemCard.propTypes={
    item_id:PropTypes.string,
    item_name:PropTypes.string,
    item_amount:PropTypes.number,
    setCart:PropTypes.func,
    cart:PropTypes.array,
    single_price:PropTypes.number,
    image:PropTypes.string,
}


export function OrderItemCard(props){
    //TODO pops up window for each order
    const [orderModalState, setOrderModalState]=useState(false);
    useEffect(() => {
        const body = document.body;
        if (orderModalState) {
        body.style.overflow = 'hidden';
        }
        return () => {
        body.style.overflow = 'visible';
        };
    }, [orderModalState]);
    const {item_name,cart,setCart,single_price,image}=props

    return(
        <div className="OrderItemCard">
            <div className='item-card'>
                <h3>{item_name}</h3>
                <img src={image}></img>
                <OrderModal
                item_name={item_name}
                single_price={single_price}
                modalState={orderModalState} 
                setModalState={setOrderModalState}
                cart={cart}
                setCart={setCart}
                image={image}
                />
                <h3>$ {single_price.toFixed(2)}</h3>
                <button className='btn item-card-btn' onClick={()=>setOrderModalState(!orderModalState)}>Add to Order</button> {/*Open Model*/ }
            </div>
        </div>
    );}