import { useEffect, useState } from 'react';

export function Menu(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData= async()=>{
        let items;
        try{
            items=await (await fetch('http://localhost:3000/menu')).json()
            console.log("request success")
        }catch(e){
            console.log(e);
        }
        setData(items.Menu_items);
    }

    return(
        <div className='page-div header-padding'>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                </tr>   
            {data.map((item) => (             
                <tr key={item._id}>
                    <td>{item.item_name}</td>
                    <td>{item.price}</td>
                </tr>
            ))}
            </table>
        </div>
);}