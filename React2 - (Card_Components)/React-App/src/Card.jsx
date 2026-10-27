import LocationPic from './assets/Nainital.jpg'

function Card() {
    return(
        <div className="card">
            <img height="100px" width="100px" className="card-img" alt="Nainital" src={LocationPic}></img>
            <h2 className="card-Title">Nanital</h2>
            <p className="card-about">This is a card i made using react js for the first time</p>
        </div>
    );
}

export default Card;