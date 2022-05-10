import React, { useState, useEffect } from 'react'
import Ourworkcards from './Ourworkcards'
import firebase from './firebase'

import Header from './Header';
import Footer from './Footer';


const Ourwork = () => {

    const [ourWorks, setOurWorks] = useState([]);
    const [ourWorksBack, setOurWorksBack] = useState([]);
    const [catList, setCatList] = useState([]);

    useEffect(() => {
        const ref = firebase.firestore().collection("OurWork");
        function getOurWorks() {
            ref.get().then((item) => {
                const items = item.docs.map((doc) => doc.data());
                setOurWorks(items);
                setOurWorksBack(items);

                const list = [... new Set(items.map((curElem) => {
                    return curElem.Category;
                }))]
                setCatList(list);

            });
        }
        getOurWorks();
    }, []);


    const filterItems = (category) => {
        const updatedList = ourWorksBack.filter((curElem) => {
            return curElem.Category === category;
        })
        setOurWorks(updatedList);
    }

    return (
        <div>
            <Header />
            <h2 style={{ "padding-top": "1.8rem", 'margin': '0', 'textAlign': 'center' }}>Our Work</h2>
            <nav className="navbar">
                <div className="btn-group btn-grid8">


                    {catList.map((curElem) => (
                        <button className="btn-group__item" onClick={() => filterItems(curElem)}>{curElem}</button>
                    ))}

                    <button className="btn-group__item" onClick={() => setOurWorks(ourWorksBack)}>All</button>
                </div>

            </nav>
            <div className="grid3">
                <Ourworkcards ourWorks={ourWorks} />
            </div>

            <Footer/>            
        </div>
    )
}

export default Ourwork;
