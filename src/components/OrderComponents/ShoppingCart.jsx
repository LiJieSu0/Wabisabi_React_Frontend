import PropTypes from 'prop-types';
import {useState} from 'react';
import {EditModal} from './EditModal';

ShoppingCartItem.propTypes={
    modalState:PropTypes.bool,
    setModalState:PropTypes.func,
    image:PropTypes.string,
    index:PropTypes.number,
    cart:PropTypes.array,
    setCart:PropTypes.func, 
}

export function ShoppingCartItem(props){
    const {index,cart,setCart,image}=props;
    const [editModalState, setEditModalState]=useState(false);
    let item=cart[index];
    //TODO adjust the showing text
    return(
        <div>
            <p>Item: {item.item_name}</p>
                        <p>Amount: {item.amount}</p>
                        <p>{(item.ice_level)}</p>
                        <p>{(item.sugar_level)}</p>
                        <p>Price: {item.price}</p>
            {cart.map((item,index)=>{
                return(
                <div key={index}>
                    <EditModal 
                    modalState={editModalState}
                    setModalState={setEditModalState}
                    cart={cart}
                    setCart={setCart}
                    image={image}
                    cartIndex={index}
                    />
                
                </div>
                )})
            }
            <button onClick={()=>setEditModalState(!editModalState)}>Edit/Remove</button>

        </div>
)}