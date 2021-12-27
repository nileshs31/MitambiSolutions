import React, { useState, useEffect } from 'react'
import firebase from './firebase'
import { Alert } from 'react-bootstrap';

import "firebase/compat/storage"

const AdminMain = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [proposals, setProposals] = useState([]);

    const storage = firebase.storage();
    // Works
    const [id, setid] = useState('');
    const [Title, setTitle] = useState('');
    const [Category, setCategory] = useState('');
    const [Description, setDescription] = useState('');
    const [ImageLink, setImageLink] = useState('');
    const [Image, setImage] = useState(null);
    const [isLatest, setisLatest] = useState(true);
    // HeaderItems
    const [isEnabled, setisEnabled] = useState(true);
    const [nameHeader, setnameHeader] = useState('');
    const [to, setTo] = useState('');

    useEffect(() => {
        const ref = firebase.firestore().collection("ContactUs");
        function getProposals() {
            ref.get().then((item) => {
                const items = item.docs.map((doc) => doc.data());
                setProposals(items);
            });
        }
        getProposals();
    }, []);

    const uploadWork = (doc, dbName) => {
        setShowSuccess(false);
        const ref = firebase.firestore().collection(dbName);
        ref.doc(doc.id).set(doc).catch((err) => { console.error(err) }).then(() => { setShowSuccess(true) });

    };

    const handleChangeImage = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleUploadImage = () => {
        const uploadTask = storage.ref(`workImages/${Image.name}`).put(Image);
        uploadTask.on(
            "state_changed",
            (snapshot) => { },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("workImages")
                    .child(Image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log("URL: ", url);
                        setImageLink(url)
                    }).then(alert("Image uploaded!"));
            }
        )
    };

    function AlertSuccess() {

        if (showSuccess) {
            return (
                <Alert variant="success" className="alertAdmin" onClose={() => setShowSuccess(false)} dismissible >
                    <p>
                        Data Uploaded
                    </p>
                </Alert >
            );
        }
        return null;
    }

    return (
        <div>
            <AlertSuccess />
            <div className='grid2' style={{ 'margin-top': '2rem' }}>
                <div style={{ 'padding': '1rem', 'margin': 'auto' }}>
                    <h3 style={{ 'text-align': 'center' }}>Enter new Works</h3>
                    <div className="mb-3">
                        <input type="text" className="form-control" onChange={event => setid(event.target.value)} placeholder="Id" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" onChange={event => setCategory(event.target.value)} placeholder="Category" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" onChange={event => setTitle(event.target.value)} placeholder="Name of Project" />
                    </div>
                    <div className="form-check mb-3">
                        <input class="form-check-input" type="checkbox" value="" defaultChecked={isLatest} onChange={() => setisLatest(!isLatest)} />
                        <label class="form-check-label" for="flexCheckDefault">
                            isLatest?
                        </label>
                    </div>
                    <div class="mb-3">
                        <label for="Workimage">Project Image:</label>
                        <input type="file" class="form-control-file mb-3" id="Workimage" onChange={handleChangeImage} />
                        <button className="btn btn-outline-success mb-3" onClick={() => handleUploadImage}>Upload</button>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" onChange={event => setDescription(event.target.value)} rows="3" placeholder="Description"></textarea>
                    </div>
                    <div className="mb-3">
                        <button onClick={() => uploadWork({ id, Title, Category, Description, ImageLink, isLatest }, "OurWork")} className="btn btn-primary">Confirm</button>
                    </div>

                </div>

                <div style={{ 'padding': '1rem', 'margin': 'auto' }}>
                    <h3 style={{ 'text-align': 'center' }}>Enter HeaderItems</h3>
                    <div className="mb-3">
                        <input type="text" className="form-control" onChange={event => setid(event.target.value)} placeholder="Id" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" onChange={event => setnameHeader(event.target.value)} placeholder="Name/Title" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" onChange={event => setTo(event.target.value)} placeholder="To" />
                    </div>
                    <div className="form-check mb-3">
                        <input class="form-check-input" type="checkbox" value="" defaultChecked={isEnabled} onChange={() => setisEnabled(!isEnabled)} />
                        <label class="form-check-label" for="flexCheckDefault">
                            isEnabled?
                        </label>
                    </div>
                    <div className="mb-3">
                        <button onClick={() => uploadWork({ id, nameHeader, to, isEnabled }, "headerItems")} className="btn btn-primary">Confirm</button>
                    </div>

                </div>
            </div>

            <div className='grid'>
                <div style={{ 'padding': '1rem', 'margin': 'auto' }}>
                    <h2 style={{ 'text-align': 'center' }}>Proposals:</h2>
                    <div className='grid2' style={{ 'margin-top': '2rem', 'grid-gap': '0.5rem', 'padding': '0rem' }}>
                        {proposals.map((props) => (
                            <div style={{ 'background-color': 'white', 'margin': 'auto', 'padding': '3rem', 'border-radius': '5%' }}>
                                <h3><span style={{ 'text-decoration': 'underline', color: 'black' }}>Project Title</span> : {props.Title}</h3>
                                <h4><span style={{ 'text-decoration': 'underline', color: 'black' }}>Name</span> : {props.Name}</h4>
                                <h4><span style={{ 'text-decoration': 'underline', color: 'black' }}>Phone Num</span> : {props.Phone}</h4>
                                <h4><span style={{ 'text-decoration': 'underline', color: 'black' }}>Email</span> : {props.Email}</h4>
                                <p><span style={{ 'text-decoration': 'underline', color: 'black' }}>Description</span> : <br />{props.Description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AdminMain;
