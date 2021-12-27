import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import firebase from './firebase'

import "../src/css/homeStyle.css"
import Ourworkcards from './Ourworkcards'

const Home = () => {
    const [ourWorks, setOurWorks] = useState([]);

    useEffect(() => {
        const ref = firebase.firestore().collection("OurWork").where("isLatest", "==", true);
        function getOurWorks() {
            ref.get().then((item) => {
                const items = item.docs.map((doc) => doc.data());
                setOurWorks(items);
            });
        }

        getOurWorks();
    }, []);

    return (
        <div>
            <div className="grid2 bannerSkew" style={{ 'grid-gap': '0rem', 'padding': '0rem' }}>
                <div style={{ 'background': '#212529' }}> <img src="images/banners/code1.png" alt="" style={{ 'width': '100%' }} /></div>
                <div className="bannerRightSide">
                    <h1 className="bannerHeading">Start Growing With&nbsp;Us</h1>
                    <NavLink className="btn btn-primary btn-lg" to="/contactus" role="button">Contact&nbsp;Us</NavLink>
                </div>
            </div>

            <div className="grid whatWeDo">
                <h2>What we do?</h2>
                <p style={{ 'width': '100%', 'text-align': 'justify' }}>
                    We at MITAMBI SOLUTIONS provide a seamless experience in Web Development, Game Development, VR/AR Development, Digital Marketing, AI and ML Tools Development.
                    <br /><br />
                    We believe in a principle that MITAMBI SOLUTIONS will solely grow if we tend to deliver
                    results to our customers that may facilitate them to grow their business.
                    Our business model focuses on having long-run strategic relations with our clients
                    by providing a mix of prime quality, price effective and on time delivery of solutions.
                    In our every project, we work on the far side the norms of a traditional
                    consumer relationship by investing longer to know client's current and future business wants.
                    <br /><br />
                    MITAMBI SOLUTIONS has been frequently investing in maintaining the infrastructure to
                    produce better of work surroundings to our team members and to serve our customers higher.
                </p>
            </div>

            <div className="grid TalkExpert" style={{ 'background-image': "url('../images/banners/codes.png')" }}>
                <br />
                <h3>Talk to an Expert Right&nbsp;now!</h3>
                <NavLink className="btn btn-primary btn-lg" to="/contactus" role="button">Contact&nbsp;Us</NavLink>
            </div>

            <div className="grid LatestWork">
                <h2 style={{ "padding-bottom": "2rem;" }}>Latest Work</h2>
                <div className="grid3">
                    <Ourworkcards ourWorks={ourWorks} />
                </div>
            </div>


        </div>
    )
}

export default Home;
