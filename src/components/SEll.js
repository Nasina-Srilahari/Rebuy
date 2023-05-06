import React, { useState, useEffect } from "react";
import './Sell.css';
import data from "./TemplateData.json";
import { collection, query, onSnapshot, getDocs, QuerySnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfigs/firebaseconfig';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom'

function SEll() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setproducts] = useState([]);
  // const location = useLocation();
  // console.log(location.state.email)

  useEffect(() => {
    const getproducts = () => {
      const productsArray = [];
      const path = "productsResell";
      getDocs(collection(db, path)).then((QuerySnapshot) => {
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
          //console.log(doc.id, "=>" , doc.data());
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
    <>
      <Navbar />
      <div className="templateContainer">

        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            products
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (val.producttitle.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div className="template" key={val.id}>
                    <img src={val.productimage} alt="" />
                    <div className="template-details">
                      <h4 className="template-details-title">{val.producttitle}</h4>
                      <p className="template-details-location">{val.location}</p>
                      <p className="template-details-contact">{val.contact}</p>
                      <p className="price">${val.price}</p>
                      <button className="btn btn-success">Contact Seller</button>
                    </div>
                  </div>
                )
              })
          }
        </div>
      </div>
    </>
  )
}
export default SEll;