import '@styles/HomePage.css';
import {wagashiImages} from '@components/FileUtil'

import {useState} from 'react';

export function HomePage(){
    let imgSet=Object.values(wagashiImages);
    const [currImg,setCurrImg]=useState(imgSet[0]);

    function handleChangeImg(id){
        let currIdx=imgSet.indexOf(currImg);
        if(id=='left'){
            if(currIdx-1<0){
                setCurrImg(imgSet[imgSet.length-1]);
                return;
            }
            setCurrImg(imgSet[currIdx-1]);
        }
        else{
            if(currIdx+1>=imgSet.length){
                setCurrImg(imgSet[0]);
                return;
            }
            setCurrImg(imgSet[currIdx+1]);
        }
    }
    return(
        <div>
            <div className="header-padding" id="home-first-img-div">
                <div id='home-first-content-div'>
                    <h1 className='black-background'>Welcome to the Best Teahouse in OKC</h1>
                </div>
            </div>
            <div id="home-second-img-div" >
                <div className='black-overlay'></div>
                <div id='home-second-content-div'>
                    <h1>Discover the Essence of Tea-Making at our Enchanting Tea Gardens</h1>
                    <p>
                        Witness the mesmerizing craftsmanship of our tea artisans, whose nimble fingers work their magic.
                    </p>
                </div>
            </div>
            <div id="home-third-div">
                <div id="home-third-img-set">
                    <img id="home-third-img-div" src={currImg} alt="waskasi"/>
                    <div>
                        <button id='left' className='change-img-btn' onClick={(e)=>handleChangeImg(e.target.id)}>&#x3C;</button>
                        <button id='right' className='change-img-btn' onClick={(e)=>handleChangeImg(e.target.id)}>&#x003E;</button>
                    </div>
                </div>
                    <div id="home-third-contend-div">
                        <p>It’s all about the design and art.</p>
                        <p>Order Now!</p>
                        <p>See more picture wakasi</p>
                    </div>
            </div>
        </div>
);}