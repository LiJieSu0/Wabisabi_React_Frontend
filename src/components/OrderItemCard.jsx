import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import {OrderModal} from './OrderModal'

import '../../css/OrderItemcCard.css'


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
    const [modalState, setModalState]=useState(false);
    useEffect(() => {
        const body = document.body;
        if (modalState) {
        body.style.overflow = 'hidden';
        }
        return () => {
        body.style.overflow = 'visible';
        };
    }, [modalState]);
    const {item_name,cart,setCart,single_price,image}=props
    return(
        <div className="OrderItemCard">
            <div className='item-card'>
                <h1>{item_name}</h1>
                <img src={image}></img>
                <OrderModal
                item_name={item_name}
                single_price={single_price}
                modalState={modalState} 
                setModalState={setModalState}
                cart={cart}
                setCart={setCart}
                image={image}
                />
            </div>
        </div>
    );}