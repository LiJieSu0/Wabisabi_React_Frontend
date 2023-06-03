import { useEffect, useState } from 'react';
import { FetchItemsFromServer } from './ServerUtil';

export function MenuPage(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        async function fetchMenu(){
            let myItems;
            try{
                myItems=await FetchItemsFromServer();
            }catch(e){
                console.log(e);
            }
            setData(myItems.Menu_items);
        }
        fetchMenu();
    },[]);

    return(
        <div className='page-div header-padding'>
            <table>
                <tbody>
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
                </tbody>
            </table>
        </div>
);}