import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Careers = () => {
    return (
        <div>
            <Header />
            <div className="grid careersHeading">

                <h1>Learn & Grow With Us</h1>
                <p>
                    Team Mitambi invites you to learn and grow with us, learning new skills has never been so easy. 
                    <br />
                    With us you can learn key skills making you future ready to be a problem solver with the needed 
                    experience to secure your favourite job! 
                </p>
            </div>

            <h3 style={{ 'text-align': 'center', 'margin': '3rem 1rem 1rem 1rem' }}>To join our next Batch, Fill the form below:</h3>
            <br />
            <div style={{ 'height': '300px' }}>
                    <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdXmjS1KUd6isn6w64Y083cAbGyPP41ZuYf3u3EaV3S0IUpPA/viewform?embedded=true"
                    width="100%" height="100%" frameborder="0">Loading…</iframe>



                <h3></h3>

            </div>
            <Footer/>
        </div>
    )
}

export default Careers
