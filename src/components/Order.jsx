import { useState } from 'react';



export function Order(){
    const [text, setText] = useState('');
    const [data, setData] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    }
    async function handleSubmit(e){
        e.preventDefault();
        const formData={
            input:text,
        }
        console.log(text);

        let response;
        let fromServerData;
        try{

            response=await fetch("http://localhost:3000/order/submit",{
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


    return(
        <div className="header-padding">
            <form action='http://localhost:3000/order/submit' method="POST" onSubmit={handleSubmit}>
                <label htmlFor="test_input">Test input</label>
                <input type="text" id="test_input" name="testform" placeholder="some text" value={text} onChange={handleChange}/>
                <br/><button type="submit">Submit</button>
            </form>
            {<h1>{data.input}</h1>||"No DATA"}
        </div>
    );}

