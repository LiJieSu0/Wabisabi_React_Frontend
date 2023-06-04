import { useContext } from 'react';
import { wholeMenu } from './MyContext';
export function MenuPage(){
    const data=useContext(wholeMenu);

    return(
        //TODO categorize items
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