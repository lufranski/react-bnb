import group from '../images/group.png';

export default function Hero(){
    return(
        <div className="hero">
            {/* img */}
            <img src={group} alt="a group of people photos" className="groupPics" />
            {/* text */}
            <div className="txtWrapper">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}