import PropTypes from 'prop-types';
import {useState} from 'react';
import '@styles/Modal.css';
import { ModalContent } from './ModalContent';

EditModal.propTypes={
    modalState:PropTypes.bool,
    setModalState:PropTypes.func,
    image:PropTypes.string,
    cartIndex:PropTypes.number,
    cart:PropTypes.array,
    setCart:PropTypes.func, 
}


export function EditModal(props){   
    const {modalState,setModalState,image,cart,setCart,cartIndex}=props;
    let item=cart[cartIndex];
    let single_price=item.price/item.amount;
    const [amount, setAmount]=useState(item.amount);
    const [iceState,setIceState]=useState(item.ice_level);
    const [sugarState,setSugarState]=useState(item.sugar_level);

    function handleSubmit(e){
        e.preventDefault();
        if(amount==0){
            //remove item from cart
            setCart(prev=>{
                const updatedState=[...prev];
                updatedState.splice(cartIndex,1);
                return updatedState;
            })
            setModalState(!modalState);
            return;
        }
        const custoumize={
            'item_name':item.item_name,
            'amount':amount,
            'ice_level':iceState,
            'sugar_level':sugarState,
            'toppings':[],
            'price':amount*single_price
        }
        setCart(prev=>{
            const updatedState=[...prev];
            updatedState[cartIndex]=custoumize;
            return updatedState;
        });
        setModalState(!modalState);
    }

    function handleAmount(id){
        if(id==="amountIncrease"){
            if(amount>10){
                return;
            }
            setAmount(amount+1);
        }
        if(id==="amountDecrease"){
            if(amount<=0){
                return;
            }
            setAmount(amount-1);
        }
    }
    return(
        <div>
            <div id="background" className={`modal-background modal-showing-${modalState}`} onClick={(e)=>{
                if(e.target.id==="background"){
                    setModalState(!modalState);
                }
            }}>
                <div className='modal-inner' onClick={()=>setModalState(modalState)}>
                    <ModalContent
                        iceState={iceState}
                        sugarState={sugarState}
                        handleSubmit={handleSubmit}
                        handleAmount={handleAmount}
                        image={image}
                        amount={amount}
                        setIceState={setIceState}
                        setSugarState={setSugarState}
                        item_name={item.item_name}
                        method={"Update"}
                    />
                </div>
                
            </div>
        </div>
    );
}