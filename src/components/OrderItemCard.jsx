import PropTypes from 'prop-types';
import { useState } from 'react';
import '../../css/OrderItemcCard.css'


OrderItemCard.propTypes={
    item_id:PropTypes.string,
    item_name:PropTypes.string,
    item_amount:PropTypes.number,
    handleItemBt:PropTypes.func,
    controlValue:PropTypes.bool
}


export function OrderItemCard(props){
    //TODO pops up window for each order
    const {item_name,controlValue}=props;
    const [modalOpen,setModalOpen]=useState(false);
    const [iceState,setIceState]=useState('regular_ice');
    const [sugarState,setSugarState]=useState('regular_sugar');
    const openModal=()=>{
        setModalOpen(true);
    }
    const closeModal=()=>{
        setModalOpen(false);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        const custoumize={
            'ice':iceState,
            'sugar':sugarState
        }
        //TODO add customize order
        console.log(custoumize)
        alert('Add to cart');
        closeModal();
    }

    return(
        <div className="OrderItemCard">
            <div className='item-card'>
                <h1>{item_name}</h1>
                <button onClick={openModal}>Add to Order</button>
                {modalOpen && (
                    <div>
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
                            <button type="submit">submit</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );}