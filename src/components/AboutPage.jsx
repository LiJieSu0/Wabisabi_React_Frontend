// import '../css/AboutPage.css'
import { useState } from 'react';

export function AboutPage(){
    const itemList=['Item 1', 'Item 2', 'Item 3'];
    const [items, setItems] = useState(itemList[0]);

    // Function to update the billboard content
    const changeBillboardContent = () => {
        let currIdx=itemList.indexOf(items);
        if(currIdx+1>=itemList.length){
            setItems(itemList[0]);
            return;
        }
        setItems(itemList[currIdx+1]);
    };
    return(
        <div className="billboard-container">
            <div className="billboard-content">
                <div className="billboard-item" >
                    {items}
                </div>
            </div>
                <button onClick={changeBillboardContent}>Change Content</button>
        </div>
    );

}