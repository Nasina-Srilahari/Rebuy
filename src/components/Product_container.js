import React from "react";
import './Product_container.css'

const Product_container = (product) =>{
    return(
        <div className="productContainer">
            <img src={product.product.productimage}/>
            <div className="productDetails">
                <p className="productTitle">{product.product.producttitle}</p>
                <p className="productpno">contact: {product.product.contact}</p>
                <p className="productloc">location: {product.product.location}</p>
                {/* <p className="productprice">MRP: {product.product.price}</p> */}
            </div>
        </div>
    )
}

export default Product_container;