import { useState } from 'react';
import '../../css/Order.css'

const SERVER_URL= import.meta.env.VITE_APP_SERVER_URL;

export function Order(){
    
    const [text, setText] = useState('');
    const [data, setData] = useState('');
    const [item1Value, setItem1Value]=useState(0);
    const handleChange = (event) => {
        setText(event.target.value);
    }
    async function handleSubmit(e){
        e.preventDefault();
        // alert("You submitted it!");
        const formData={
            input:text,
            item1_amount:item1Value
        }

        let response;
        let fromServerData;
        try{
            response=await fetch(`${SERVER_URL}/order/submit`,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            })
            fromServerData=await response.json()
        }catch(e){
            console.log(e);
        }
            setData(fromServerData.Message);            
    }
    function handleAdd(){
        if(item1Value>=99)return;
        setItem1Value(item1Value+1);
    }
    function handleSubtract(){
        if(item1Value<=0)return;
        setItem1Value(item1Value-1);
    }

    return(
        <div className="header-padding">
            <form onSubmit={handleSubmit}>
                <label htmlFor="test_input">Test input</label>
                <input type="text" id="test_input" placeholder="some text" value={text} onChange={handleChange}/>
                <div className='item1'>
                    <label htmlFor='item1'>Item 1</label>
                    <button type="button" onClick={handleAdd}> + </button>
                    <input id="item1" type="text"  value={item1Value} readOnly/>
                    <button type="button" onClick={handleSubtract}> - </button>
                </div>
                <br/><button type="submit">Submit</button>
            </form>
            {<h1>{data.item1_amount}</h1>||"No DATA"}



        </div>
    );}

