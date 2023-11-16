import bnbLogo from '../images/airbnb-logo.png';

export default function Navbar(){
    return(
        <nav>
            <img src={bnbLogo} alt="air bnb logo" className="logo" />
        </nav>
    )
}