import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import {Modal} from './Modal'

import '../../css/OrderItemcCard.css'


OrderItemCard.propTypes={
    item_id:PropTypes.string,
    item_name:PropTypes.string,
    item_amount:PropTypes.number,
    handleItemBt:PropTypes.func,
}


export function OrderItemCard(props){
    //TODO pops up window for each order
    const {item_name}=props
    const [modalState, setModalState]=useState(false);
    const [customizeState,setCustomizeState]=useState({
        "ice_level":"regular_ice",
        "sugar_level":"regular_sugar",
        "toppings":[],
    })

    function handleSubmit(e){
        e.preventDefault();
        //TODO add customize order
        alert('Add to cart');
    }

    return(
        <div className="OrderItemCard">
            <div className='item-card'>
                <h1>{item_name}</h1>
                <Modal
                modalState={modalState} 
                setModalState={setModalState}
                
                />
            </div>
        </div>
    );}