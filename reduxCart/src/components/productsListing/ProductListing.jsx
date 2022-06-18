import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link } from 'react-router-dom';

import ProductCard from "../productCard/productCard";
import styles from './ProductListing.module.css';
import { FETCH_ON_NAME , FETCH_ON_CATEGORY } from '../../features/products';



const ProductListing = () => {

    const products = useSelector((state) => state.products);
    const cartList = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    const returnExistsInCart = (productId) => {
        return cartList.cartItems.find((product) => product.id == productId) ? true : false;
    }

    const debounce = (func, timeout = 300) => {
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }

    const fetchProductsOnUserInput = (event) => {
         dispatch(FETCH_ON_NAME(event.target.value));
    }

    const fetchProductOnCategoryInput = (event) => {        
        dispatch(FETCH_ON_CATEGORY(event.target.value));
    }

    return (
        <div>
            <div className={styles.searchBarContainer}>
                
                <input onInput={fetchProductsOnUserInput} placeholder="search"></input>
                <label> Category </label>
                <select onInput={fetchProductOnCategoryInput} placeholder = "">
                    {!products.category.length > 0 ? <option value="">Loading...</option> : products.category.map((i) => (

                        <option key={i} value={i}>{i}</option>

                    ))}
                </select>
                <Link to="/cart"><label className={styles.cartCount}>Items in cart : {cartList.ItemCount}</label></Link></div>
            <div className={styles.productsListContainer}>
                {!products.products.length > 0 ? <h1>Loading Products</h1> : products.products.map((i) => (

                    <ProductCard key={i.id} product={i} existsInCart={returnExistsInCart(i.id)} />

                ))}
            </div>
        </div>
    )
}

export default ProductListing;