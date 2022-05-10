import React from 'react'

import Header from './Header';
import Footer from './Footer';
const Error = () => {
    return (
        <div>
            <Header />
            <div style={{ 'width': '100%', 'display': 'block' }}>
                <img src="images\404.png" alt="404 Error... Page Not Found!" style={{ 'display': 'block', 'margin': '6% auto', 'max-width':'100%'  }}/>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Error
