import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import firebase from './firebase'
import ScrollToTop from './ScrollToTop';

const Header = () => {
    const [headeritems, setHeaderItems] = useState([]);

    useEffect(() => {
        const ref = firebase.firestore().collection("headerItems");
        function getHeaderItems() {
            ref.get().then((item) => {
                const items = item.docs.map((doc) => doc.data());
                setHeaderItems(items);
            });
        }
        getHeaderItems();
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ 'padding': '2px 0px' }}>
                <div className="container-fluid">
                    <NavLink exact activeClassName="active" className="navbar-brand headerItems" to="/">
                        <img src="images/logo.png" alt="" width="48" height="48" /></NavLink>
                    <NavLink exact activeClassName="active" className="navbar-brand headerItems" style={{ 'font-size': '1.2rem' }} to="/">
                        Mitambi Solutions</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav justify-content-end" >
                            {headeritems.map((headerItems) => (
                                <li className="nav-item" key={headerItems.id}>
                                    <NavLink exact activeClassName="active" className={headerItems.isEnabled ? "nav-link headerItems" : "nav-link headerItems disabled"} aria-current="page" to={headerItems.to}>{headerItems.nameHeader}</NavLink>
                                </li>
                            ))}

                            <li className="nav-item">
                                    <NavLink exact activeClassName="active" className="nav-link headerItems" aria-current="page" to="marketing">MarketingTest</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ScrollToTop/>

        </div >
    )
}

export default Header
