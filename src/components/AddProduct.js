import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import { auth, db, storage } from '../firebaseConfigs/firebaseconfig'
import { collection, getDocs, query, where, docs, updateDoc, addDoc } from 'firebase/firestore'
import './AddProduct.css'
import { getDownloadURL, ref, uploadBytes, UploadBytes } from 'firebase/storage'
import Navbar from './Navbar';

function AddProduct() {
    const [producttitle, setproducttitle] = useState("");
    const [category, setcategory] = useState("");
    const [description, setdescription] = useState("");
    const [edition, setedition] = useState("");
    const [contact, setcontact] = useState("");
    const [price, setprice] = useState("");
    const [location, setlocation] = useState("");
    const [productimage, setproductimage] = useState("");
    const [imagerror, setimagerror] = useState("");
    const [successmsg, setsuccessmsg] = useState("");
    const [uploaderror, setuploaderror] = useState("");
    const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG']
    const handlepdtimg = (e) => {
        e.preventDefault();
        let selectedFile = e.target.files[0];

        if (selectedFile) {
            if (selectedFile && types.includes(selectedFile.type)) {
                setproductimage(selectedFile);
                setimagerror("");
            }
            else {
                setproductimage(null);
                setimagerror('please select valid image file(png or jpg)')
            }
        }
        else {
            setimagerror('please select image')
        }
    }
    const handleAddProduct = (e) => {
        e.preventDefault();
        const storageRef = ref(storage, "productimages" + "FICTION" + "/" + Date.now());
        //console.log(storageRef._location.path);

        uploadBytes(storageRef, productimage)
            .then(() => {
                getDownloadURL(storageRef).then(url => {
                    addDoc(collection(db, "products" + "FICTION"), {
                        producttitle,
                        category,
                        edition,
                        contact,
                        location,
                        productimage: url,
                    })
                })
            })
    }
    return (
        <div>
            <Navbar/>
        <div className="AddProduct">
                <img src="https://firebasestorage.googleapis.com/v0/b/rebuy-e8d72.appspot.com/o/add_back3.jpeg?alt=media&token=d3d496dd-69b1-4f69-b1d7-33e88d28b9db"/>
                <div className="addprod-container">
                    <form className="addprod-form" onSubmit={handleAddProduct}>
                        <p>Book Data</p>
                        {successmsg && <div className="successmsg">{successmsg}</div>}
                        {uploaderror && <div className="uploaderror">{uploaderror}</div>}
                        <label>Product Title</label>
                        <input type="text" onChange={(e) => { setproducttitle(e.target.value) }} placeholder="Product Title" />
                        <label>Category of book</label>
                        <input type="text" onChange={(e) => { setcategory(e.target.value) }} placeholder="Category of book" />
                        <label>Edition of Book</label>
                        <input type="text" onChange={(e) => { setedition(e.target.value) }} placeholder="Edition of Book" />
                        <label>Phone number for contact</label>
                        <input type="text" onChange={(e) => { setcontact(e.target.value) }} placeholder="Phone number for contact" />
                        <label>Your Address</label>
                        <input type="text" onChange={(e) => { setlocation(e.target.value) }} placeholder="Your Address" />
                        <label>Product Image</label>
                        <input type="file" onChange={handlepdtimg} />
                        {imagerror && <div className="imagerror">{imagerror}</div>}
                        <button type="submit">Add Product</button>
                    </form>
                </div>
        </div>
        </div>
    )
}
export default AddProduct;