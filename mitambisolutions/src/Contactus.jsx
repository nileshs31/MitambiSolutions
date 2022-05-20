import React, { useState, useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import firebase from './firebase'
import { Alert } from 'react-bootstrap';

const Contactus = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [DateTime, setDateTime] = useState('');
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    
    const ref = firebase.firestore().collection("ContactUs");

    useEffect(() => {
        const script = document.createElement('script');
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const sendProposal = (newProposal) => {
        setShowError(false);
        setShowSuccess(false);
        newProposal.DateTime = Date().toLocaleString(); 

        if (newProposal.Name == '' || newProposal.Email == '' || newProposal.Phone == '' || newProposal.Title == '' || newProposal.Description == '') {
            setShowError(true);
        }
        else {
            ref.doc().set(newProposal).catch((err) => { console.error(err) }).then(() => { {TurnOffSuccess();  setShowSuccess(true)} });
        }
        

    };

    function AlertError() {

        if (showError) {
            return (
                <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                    <p>
                        Please fill all the fields!
                    </p>
                </Alert>
            );
        }
        return null;
    }

    function TurnOffSuccess() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("num").value = "";
        document.getElementById("proj").value = "";
        document.getElementById("desc").value = "";
    }

    function AlertSuccess() {

        if (showSuccess) {
            return (
                <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                    <h4>Query sent!</h4>
                    <p>
                        You will be contacted soon
                    </p>
                </Alert>
            );
        }
        return null;
    }

    return (
        <div>
            <Header />
            <div className="contactHead">
                <h2>Contact Us And Talk with an Expert Right Now!</h2>
                <p >Talk to an expert and get the best solution for your dream project at your cheapest
                    price. Contact Now!</p>
            </div>

            <div className="contactForm">
                <h2>Get In Touch!</h2>
                <p>You can directly send us your queries and an expert will get back to you soon.</p>
                <br />
                <>{/* OLD CONTACT US FORM */}
                <div className="contactForm2">

                    <AlertSuccess />
                    <AlertError />
                    <div className="mb-3">
                        <input type="text" className="form-control" id="name" onChange={event => setName(event.target.value)} placeholder="Your Name*" />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="email" onChange={event => setEmail(event.target.value)} placeholder="Your Email*" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="num" onChange={event => setPhone(event.target.value)} placeholder="Your Phone Number*" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="proj" onChange={event => setTitle(event.target.value)} placeholder="Name of Project*" />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" id="desc" onChange={event => setDescription(event.target.value)} rows="3" placeholder="Project Description*" ></textarea>
                    </div>
                    <div className="mb-3" style={{
                        'text-align': 'center'
                    }}>
                        
                    </div>
                    <div className="mb-3">
                        <button onClick={() => {sendProposal({ Name, Email, Phone, Title, Description, DateTime }); }} className="btn btn-primary">Confirm</button>
                    </div>
                </div>
                </>

                {/* <div style={{ 'height': '300px' }}>
                    <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfs41SmHbcP5zSRoIjWWPkQW2ydb9ljutRU2R5M4sHA2itqPA/viewform?embedded=true"
                    width="100%" height="100%" frameborder="0">Loading…</iframe>

                </div> */}

            </div>
            <Footer/>       
        </div >
    )
}

export default Contactus
