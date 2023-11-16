import star from '../images/star.png';

export default function Card(props){
    console.log(props);
    let badgeTxt
    if(props.openSpots === 0){
        badgeTxt = 'SOLD OUT'
    } else if (props.location === 'Online'){
        badgeTxt = 'ONLINE'
    }
    return(
        <div className='card'>
            {/* img */}
            <img src={`../images/${props.coverImg}`} alt="card" className='cardPic' />
            {/* status label */}
            {badgeTxt && <div className='status'>{badgeTxt}</div>}
            {/* txt area */}
            <div className="txtArea">
                {/* rate */}
                <div className='rate'>
                    {/* star icon */}
                    <img src={star} alt='star icon' className='starIcon' />
                    <span> {props.stats.rating} </span>
                    <span className='grey'> ({props.stats.review})-{props.location}</span>
                </div>
                {/* description */}
                <p>{props.title}</p>
                {/* pricing */}
                <p>
                    <strong>From ${props.price} / </strong>
                    person
                </p>
            </div>
        </div>
    )
}