import React, { useState, useEffect } from 'react';
import './Product_display.css';
import {Link} from 'react-router-dom'
import Product_container from './Product_container';
import { collection, query, onSnapshot, getDocs, QuerySnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfigs/firebaseconfig';
import BasicButtonExample from './Drop'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Navbar from './Navbar';
const Product_display = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        const getproducts = () => {
            const productsArray = [];
            const path = "productsFICTION";
            getDocs(collection(db, path)).then((QuerySnapshot) => {
                QuerySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id });
                })
                setproducts(productsArray)
            }).catch((error) => {
                console.log(error.message);
            });
        }
        getproducts()
    }, []
    )

    return (
        < div className='ProductDisplay' >
            <Navbar/>
            <div className='add-btn'>
                <Link to="/AddProduct"><button><img className='add-img' src="https://firebasestorage.googleapis.com/v0/b/rebuy-e8d72.appspot.com/o/plus.png?alt=media&token=5d9dd4bd-8202-4bc7-b114-6e5b5dcbcd55"/><h4>Book</h4></button></Link>
            </div>
            <div className='allProductContainer'>
                {products.map((product) => {
                    return (
                        <Product_container
                            key={product.id}
                            product={product}
                        />
                    );
                })}

            </div>
        </div >
    );
}
export default Product_display