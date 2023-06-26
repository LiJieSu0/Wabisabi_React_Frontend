import PropTypes from 'prop-types';
import '../../css/Modal.css';

EditModal.propTypes={
    modalState:PropTypes.bool,
    setModalState:PropTypes.func,
    item:PropTypes.object,
    image:PropTypes.string,
    
}


export function EditModal(props){
    const {modalState,setModalState,item,image}=props;
    console.log(modalState)
    return(
        <div>
            <div id="background" className={`modal-background modal-showing-${modalState}`} onClick={(e)=>{
                if(e.target.id==="background"){
                    setModalState(!modalState);
                }
            }}>
                <div className='modal-inner' onClick={()=>setModalState(modalState)}>
                    <div className='modal-image'>
                        <img src={image} alt={`modal pic ${item.item_name}`}/>
                    </div>
                    <div className='modal-text'>
                        <p>{item.item_name} x {item.amount}</p>

                    </div>
                </div>
                
            </div>
        </div>
    );
}