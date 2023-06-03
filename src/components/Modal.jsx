import {useState} from 'react';
import '../../css/Modal.css'

export function Modal(){
    const [modalState, setModalState]=useState(false);
    return(
        <div>
            <div className={`modal-background modal-showing-${modalState}`}>
                Modal
                <div className='modal-inner'>
                    <div className='modal-image'>
                        <img src="https://images.unsplash.com/photo-1685446983943-81ffb3073581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80" alt="modal pic"/>
                    </div>
                    <div className='modal-text'>
                        <h2>This is some text</h2>
                        <p>The npm package react-lorem-ipsum-component receives a tot.</p>
                        <form>
                            <button onClick={()=>setModalState(!modalState)}>hi</button>
                        </form>
                    </div>
                </div>
                
            </div>
            <button onClick={()=>setModalState(!modalState)}>Show</button>
        </div>
    );
}