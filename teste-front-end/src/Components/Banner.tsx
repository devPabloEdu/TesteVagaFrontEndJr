import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/main.scss";
function Banner() {
    return <div>
        <div className='BannerImage'>
        <div className="overlay">
            <h1>Venha conhecer nossas promoções</h1>
            <p>50% Off nos produtos</p>
            <button className='BannerButton'>Ver produto</button>
        </div>
        </div>
    </div>
    
}
export default Banner;
