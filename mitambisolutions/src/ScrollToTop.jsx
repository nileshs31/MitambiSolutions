import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'

const ScrollToTop = () => {

    const [isVisible, SetIsVisible] = useState(false);

    const toggleVisbility = () =>{
        if(window.pageYOffset > 50){
            SetIsVisible(true);
        }
        else{
            SetIsVisible(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',toggleVisbility);

        return () =>{
            window.removeEventListener('scroll',toggleVisbility);
        }
    },[]);

    return (
        <div>

        <HashLink exact className={isVisible ? "floatingButtHome bg-light" : "floatingButtHome bg-light dispNone"} aria-current="page" to="#" smooth>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="70" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 15 20">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
        </svg>
        </HashLink>
        
        </div>
    )
}

export default ScrollToTop