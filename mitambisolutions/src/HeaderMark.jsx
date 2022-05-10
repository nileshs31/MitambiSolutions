import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import ScrollToTop from './ScrollToTop'

const HeaderMark = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadowHeader2" style={{'padding': '2px 0px' }}>
                <div className="container-fluid">
                    <NavLink exact activeClassName="active" className="navbar-brand headerItems" to="/marketing">
                        <img src="images/logoMark.png" alt="" width="48" height="48" /></NavLink>
                    <NavLink exact activeClassName="active" className="navbar-brand headerItems" style={{ 'font-size': '1.2rem' }} to="/marketing">
                        Mitambi Marketing</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav justify-content-end" >
                            <li className="nav-item">
                                <HashLink exact className="nav-link headerItems" aria-current="page" to="#aboutus">About Us</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink exact className="nav-link headerItems" aria-current="page" to="#oursecretrecipe">Our Secret Recipe</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink exact className="nav-link headerItems" aria-current="page" to="#contactus">Contact Us</HashLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link headerItems" aria-current="page" to="/">Mitambi Solutions</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ScrollToTop/>
        </div >
    )
}

export default HeaderMark
