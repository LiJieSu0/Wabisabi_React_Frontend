import {useState} from 'react';
import PropTypes from 'prop-types';
import '../../css/Modal.css'

OrderModal.propTypes={
    modalState:PropTypes.bool,
    setModalState:PropTypes.func,
    setCart:PropTypes.func,
    cart:PropTypes.array,
    item_name:PropTypes.string,
    single_price:PropTypes.number
}

export function OrderModal(props){
    const {modalState,setModalState,cart, setCart,item_name,single_price}=props;
    
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
    function handleAmountIncrease(){
        if(amount>99){
            return;
        }
        setAmount(amount+1);
    }
    function handleAmountReduce(){
        if(amount<=0){
            return;
        }
        setAmount(amount-1);
    }

    return(
        <div>
            <div id="background" className={`modal-background modal-showing-${modalState}`} onClick={(e)=>{
                if(e.target.id==="background"){
                    setModalState(!modalState);
                }
            }}>
                Modal
                <div className='modal-inner' onClick={()=>setModalState(modalState)}>
                    <div className='modal-image'>
                        <img src="https://images.unsplash.com/photo-1685446983943-81ffb3073581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80" alt="modal pic"/>
                    </div>
                    <div className='modal-text'>
                        <h2>Tell us what you want!</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Ice Level:
                                <select value={iceState} onChange={(e)=>setIceState(e.target.value)}>
                                <option value="regular_ice">Regular Ice 100%</option>
                                <option value="less_ice">Less Ice 70%</option>
                                <option value="half_ice">Half Ice 50%</option>
                                <option value="little_ice">Little Ice 30%</option>
                                <option value="no_ice">No Ice 0%</option>
                                </select>
                            </label>
                            <label>
                                Sugar Level:
                                <select value={sugarState} onChange={(e)=>setSugarState(e.target.value)}>
                                <option value="regular_sugar">Regular Sugar 100%</option>
                                <option value="less_sugar">Less Sugar 70%</option>
                                <option value="half_sugar">Half Sugar 50%</option>
                                <option value="little_sugar">Little Sugar 30%</option>
                                <option value="no_sugar">No Sugar 0%</option>
                                </select>
                            </label>
                            <div className='amount-manage'>
                                <button type="button" onClick={handleAmountReduce}>-</button>
                                <h1>{amount}</h1>
                                <button type="button" onClick={handleAmountIncrease}>+</button>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                
            </div>
            <button onClick={()=>setModalState(!modalState)}>Add to Order</button> {/*Open Model*/ }
        </div>
    );
}