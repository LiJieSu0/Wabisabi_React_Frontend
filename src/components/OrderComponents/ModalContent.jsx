import PropTypes from 'prop-types';
import '@styles/Modal.css';

ModalContent.propTypes={
    iceState:PropTypes.string,
    sugarState:PropTypes.string,
    handleSubmit:PropTypes.func,
    handleAmount:PropTypes.func,
    image:PropTypes.string,
    item:PropTypes.object,
    amount:PropTypes.number,
    setIceState:PropTypes.func,
    setSugarState:PropTypes.func,
    item_name:PropTypes.string,
    method:PropTypes.string,

}

export function ModalContent(props){
    const { iceState,
            setIceState,
            sugarState,
            setSugarState,
            handleSubmit,
            image,
            handleAmount,
            amount,
            item_name,
            method}=props;
    return(
    <div className='modal-content'>
        <div>
            <img className='modal-image' src={image} alt={`modal pic ${item_name}`}/>
        </div>
        <div className='modal-text'>
            <h3>Tell us what you want!</h3>
            <form onSubmit={handleSubmit}>
                <div className='cutomize-options'>
                    <label>
                        Ice Level:
                        <br/>
                        <select value={iceState} onChange={(e)=>setIceState(e.target.value)}>
                        <option value="regular_ice">Regular Ice 100%</option>
                        <option value="less_ice">Less Ice 70%</option>
                        <option value="half_ice">Half Ice 50%</option>
                        <option value="little_ice">Little Ice 30%</option>
                        <option value="no_ice">No Ice 0%</option>
                        </select>
                    </label>
                    <br/>
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
                </div>
                <div className='amount-manage-btn'>
                    <button id="amountDecrease" type="button" onClick={(e)=>handleAmount(e.target.id)}>-</button>
                    <h1>{amount}</h1>
                    <button id="amountIncrease" type="button" onClick={(e)=>handleAmount(e.target.id)}>+</button>
                </div>
                <button className="btn"type="submit">{method}</button>
            </form>
        </div>
    </div>
    );}