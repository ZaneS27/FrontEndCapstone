import React from 'react';

import BannerImg from '../images/restauranfood.jpg'
const Header = () => {
    return (
        <div>
            <header className='header'>
                <section>
                    <div className='banner'>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>We are a family owned Mediterraneran restaraunt, focused on traditional recipes served with a modern twist.</p>
                        <a href="/Booking"><button aria-label='On Click'>Reserve Table</button></a>
                    </div>
                    <div className='banner-img'>
                        <img src={BannerImg} alt=""/>
                    </div>
                </section>
            </header>
        </div>
    );
};

export default Header;
