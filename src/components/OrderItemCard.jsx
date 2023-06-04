import PropTypes from 'prop-types';
import { useState } from 'react';
import {OrderModal} from './OrderModal'

import '../../css/OrderItemcCard.css'


OrderItemCard.propTypes={
    item_id:PropTypes.string,
    item_name:PropTypes.string,
    item_amount:PropTypes.number,
    setCart:PropTypes.func,
    cart:PropTypes.array,
}


export function OrderItemCard(props){
    //TODO pops up window for each order
    const {item_name,cart,setCart}=props
    const [modalState, setModalState]=useState(false);
    return(
        <div className="OrderItemCard">
            <div className='item-card'>
                <h1>{item_name}</h1>
                <OrderModal
                item_name={item_name}
                modalState={modalState} 
                setModalState={setModalState}
                cart={cart}
                setCart={setCart}
                />
            </div>
        </div>
    );}