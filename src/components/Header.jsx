import '@styles/Header.css';
import logoPic from '@images/logo.png';
export function Header(){
return(
    <nav className='header-nav'>
        <div id='header-sign'>
            <div id='sign-with-log'>
                <img id='logo' src={logoPic} alt="Logo"/>
                <h1>Wabi-Sabi Teahouse</h1>
            </div>
            <ul className='header-list'>
                <li><a href="/" title="Home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/album">Album</a></li>
                <li><a href="/schedule">Schedule</a></li>
                <li><a href="/order">Menu/Order</a></li>
            </ul>
        </div>
    </nav>
    
    
);}