import React, { useState, useEffect } from 'react'
import AdminMain from './AdminMain'
import { Alert } from 'react-bootstrap';
import firebase from './firebase'



const Admin = () => {
    const [canShow, setCanShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [passDB, setPassDB] = useState([]);
    const [pass, setPass] = useState(true);

    useEffect(() => {
        const ref = firebase.firestore().collection("Passwords");
        function getOurWorks() {
            ref.get().then((item) => {
                const items = item.docs.map((doc) => doc.data());
                setPassDB(items);
            });
        }

        getOurWorks();
    }, []);


    function AlertError() {

        if (showError) {
            return (
                <div style={{ 'width': '75%', 'margin': 'auto', 'margin-top': '2rem', 'margin-bottom': '4rem' }}>
                    <Alert variant="danger" onClose={() => setShowError(false)} dismissible style={{ 'text-align': 'center' }}>
                        <h4>Wrong Password!!</h4>
                        <p>
                            Please leave this page immediately...
                        </p>
                    </Alert>
                </div>
            );
        }
        return null;
    }


    function ConfirmButton(){
        if (pass == passDB[0].password) {
            setCanShow(true);
            document.getElementById("passwordForm").className = "dispNone"
        }
        else {
            setShowError(true);
            setCanShow(false);
        }
    }

    function ShowAdminPage() {
        if (canShow) {

            setShowError(false);
            return <>
                <div style={{ 'text-align': 'right' }} className="mb-3">
                    <button onClick={() => { setCanShow(false) }} className="btn btn-primary">Log Out</button>
                </div>
                <AdminMain />
            </>
        }

        else {
            if (document.getElementById("passwordForm")) {
                document.getElementById("passwordForm").className = ""
            }
            return null;
        }
    }

    return (
        <div>

            <AlertError />
            <div id="passwordForm" style={{ 'text-align': 'center', 'margin': '3rem 1rem 25rem 1rem' }}>
                <form onSubmit={ e=>{
                    e.preventDefault();
                    ConfirmButton();
                } }>
                <div className="mb-3">
                    <input type="password" className="form-control" id="pass" onChange={event => setPass(event.target.value)} placeholder="Enter Password!" />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </div>
                </form>
            </div>
            <ShowAdminPage />
        </div >
    )
}

export default Admin
//onClick={() => { ConfirmButton() }} 