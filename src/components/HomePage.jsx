import '../css/HomePage.css';
import Wakasi from '../assests/img/wakasi.png';
export function HomePage(){
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
                <img id="home-third-img-div" src={Wakasi} alt="waskasi"/>
                    <div>
                        <p>It’s all about the design and art.</p>
                        <p>Order Now!</p>
                        <p>See more picture wakasi</p>
                    </div>
            </div>
        </div>
);}