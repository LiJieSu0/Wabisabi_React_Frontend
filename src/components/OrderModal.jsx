import {useState} from 'react';
import PropTypes from 'prop-types';
import { ModalContent } from './ModalContent';
import '../../css/Modal.css';


OrderModal.propTypes={
    modalState:PropTypes.bool,
    setModalState:PropTypes.func,
    setCart:PropTypes.func,
    cart:PropTypes.array,
    item_name:PropTypes.string,
    single_price:PropTypes.number,
    image:PropTypes.string,
}

export function OrderModal(props){
    
    const {modalState,setModalState,cart, setCart,item_name,single_price,image}=props;
    
    const [amount, setAmount]=useState(0);
    const [iceState,setIceState]=useState('regular_ice');
    const [sugarState,setSugarState]=useState('regular_sugar');
    
    
    function handleSubmit(e){
        e.preventDefault();
        if(amount==0){
            alert("Add at least one item!");
            return;
        }
        const custoumize={
            'item_name':item_name,
            'amount':amount,
            'ice_level':iceState,
            'sugar_level':sugarState,
            'toppings':[],
            'price':amount*single_price
        }
        setCart([...cart,custoumize]);
        setModalState(!modalState);
        setAmount(0);
        setIceState('regular_ice');
        setSugarState('regular_sugar');
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
                            item_name={item_name}
                    />
                </div>
                
            </div>
        </div>
    );
}