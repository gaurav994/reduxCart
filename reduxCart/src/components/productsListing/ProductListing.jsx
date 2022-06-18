import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@reduxjs/toolkit";

import ProductCard from "../productCard/productCard";


const ProductListing = () => {

    const products = useSelector((state) => state.products);
    const cartList = useSelector((state) => state.cart);
    const disptach = useDispatch();

    useEffect(() => {
        // dispatch fetch product list event to store
        disptach(FETCH_ALL_PRODUCTS());
        
        // dispatch fetch cart list event to store
        disptach(FETCH_USER_CART(5));
    })

    const returnExistsInCart = (productId) => {
        cartList.find((product) =>  product.cartItems)
    }

return (
<>

{ products.map((product)=> {
    <ProductCard   product={product}  existsInCart={returnExistsInCart(product.id)}   />
})}

</>)
}

export default ProductListing;