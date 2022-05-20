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
        const ref = firebase.firestore().collection("ContactUs").orderBy("DateTime");
        function getProposals() {
            ref.get().then((item) => {
                const items = item.docs.map((doc) => doc.data());
                setProposals(items);
            });
        }
        getProposals();
    }, []);

    function getProposalsOnClick(){
        const refe = firebase.firestore().collection("ContactUs").orderBy("DateTime");
        refe.get().then((item) => {
            const items = item.docs.map((doc) => doc.data());
            setProposals(items);
        });
    }

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


    const deleteProposal = (proposal) => {
        const ref = firebase.firestore().collection("ContactUs").where("DateTime", "==", proposal.DateTime)
        .where("Title", "==", proposal.Title)
        .get().catch((err) => { console.error(err) })
        .then(querySnapshot => {
            querySnapshot.docs[0].ref.delete();
            setTimeout(() => {  getProposalsOnClick() }, 1000);
        });         
    };


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
                <div style={{ 'padding': '1rem', 'margin': 'auto'}}>
                    <h2 style={{ 'text-align': 'center' }}>Proposals:</h2>
                    <div className='grid7' style={{ 'grid-gap': '0px','border': '2px solid #808080','border-bottom': '1px solid #808080', 'margin-top': '2rem','padding': '0rem'}}>
                        <h4 style={{ 'font-weight': 'bold', color: 'black','padding': '0rem', 'margin': 'auto' }}>Date Time</h4>
                        <h4 style={{ 'font-weight': 'bold', color: 'black','padding': '0rem', 'margin': 'auto' }}>Project Title</h4>
                        <h4 style={{ 'font-weight': 'bold', color: 'black','padding': '0rem', 'margin': 'auto' }}>Name         </h4>
                        <h4 style={{ 'font-weight': 'bold', color: 'black','padding': '0rem', 'margin': 'auto' }}>Phone Num    </h4>
                        <h4 style={{ 'font-weight': 'bold', color: 'black','padding': '0rem', 'margin': 'auto' }}>Email        </h4>
                        <h4 style={{ 'font-weight': 'bold', color: 'black','padding': '0rem', 'margin': 'auto' }}>Description  </h4>
                        <h4 style={{ 'font-weight': 'bold', color: 'black','padding': '0.2rem', 'margin': 'auto' }}>
                            <div className="mb-3" style={{ 'padding-top': '1rem'}}>
                                    <button onClick={() => {getProposalsOnClick()}} className="btn btn-primary">Update DB</button>
                                </div> </h4>

                    </div>
                    <div className='grid7' style={{ 'border': '1px solid #808080', 'border-top': '1px', 'grid-gap': '0px', 'grid-auto-rows': 'minmax(5px, auto)','color': 'black','padding': '0rem', 'margin': 'auto' }} >
                        {proposals.map((props) => (
                            <>
                                <div style={{ 'padding': '0.2rem','border': '1px solid #808080'}}>
                                   <p>{props.DateTime}</p>
                                </div>
                                <div style={{ 'padding': '0.2rem','border': '1px solid #808080'}}>
                                   <p>{props.Title}</p>
                                </div>
                                <div style={{ 'padding': '0.2rem','border': '1px solid #808080'}}>
                                    <p>{props.Name}</p>
                                </div>
                                <div style={{ 'padding': '0.2rem','border': '1px solid #808080'}}>
                                    <p>{props.Phone}</p>
                                </div>
                                <div style={{ 'padding': '0.2rem','border': '1px solid #808080'}}>
                                    <p>{props.Email}</p>
                                </div>
                                <div style={{ 'padding': '0.2rem','border': '1px solid #808080'}}>
                                    <p>{props.Description}</p>
                                </div>
                                <div style={{ 'padding': '0.2rem','border': '1px solid #808080'}}>
                                <div className="mb-3">
                                    <button onClick={() => {deleteProposal(props)}} className="btn btn-danger">Delete</button>
                                    <p style={{ 'font-size': '12.5px'}}>(Wait one second for DB to update)</p>
                                </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AdminMain;
