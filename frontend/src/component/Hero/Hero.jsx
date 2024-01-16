import React from 'react'
import './Hero.css';

const Hero = () => {
    return (
        <div>
            <div className='HeroHead'>
                <h1>Welcome to my ArtWorks🕊</h1>
                <span>Welcome – you’re in the perfect place for all your art and craft inspiration. We want to help you express your personality, have more fun and learn through creativity. With stacks of new ideas, hints and tips, blogs, tutorials, news and free events, we’re everything art and craft!</span>
            </div>
            <div className="HeroBody">
                <div className='HeroBodyBox'>
                    <div className='HeroBodyBoxLogo'>🚚</div>
                    <div className='HeroBodyBoxText'>
                    <h2>Free Shipping</h2>
                    <p>Free shipping on all over India</p>
                    </div>
                </div>
                <div className='HeroBodyBox'>
                    <div className='HeroBodyBoxLogo'>⏱</div>
                    <div className='HeroBodyBoxText'>
                    <h2>Same Day Shipping</h2>
                    <p>Order before 10am Mon-Fri for same day shipping</p>
                    </div>
                </div>
                <div className='HeroBodyBox'>
                    <div className='HeroBodyBoxLogo'>🎉</div>
                    <div className='HeroBodyBoxText'>
                    <h2>Weekly Discounts</h2>
                    <p>Watch out for our monthly discounts and offers</p>
                    </div>
                </div>
                <div className='HeroBodyBox'>
                    <div className='HeroBodyBoxLogo'>☎</div>
                    <div className='HeroBodyBoxText'>
                    <h2>Contact Us</h2>
                    <p>We're here to help! Contact us with ease</p>
                    </div>
                </div>
                {/* <div className='HeroBodyBox'>
                    <div className='HeroBodyBoxLogo'>🚚</div>
                    <div className='HeroBodyBoxText'>
                    <h2>Free Shipping</h2>
                    <p>Free shipping on all over India</p>
                    </div>
                </div> */}
            </div>


        </div>
    )
}

export default Hero
