import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import ProductCard from "../productCard/productCard";
import styles from './ProductListing.module.css';
import { FETCH_ON_NAME, FETCH_ON_CATEGORY } from '../../features/products';
import { UPDATE_USER_CART } from '../../features/cart';

const ProductListing = (props) => {

    var products = props.products;
    var cartList = props.cartList;

    const dispatch = useDispatch();


    const returnQuantity = (productId) => {
        let matchingProduct = cartList.cartItems.find((product) => product.id == productId);
        return matchingProduct ? matchingProduct.quantity : 0;
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

    const updateCart = (operationType, productToBeUpdated) => {
        let cartListLocal = JSON.parse(JSON.stringify(cartList));
        if (operationType == "add") {
            // if product already exists increment quantity 
            let productFound = cartListLocal.cartItems.find((item) => item.id == productToBeUpdated.id);
            if (productFound) {
                productFound.quantity++;
            } else
            // if do not exist in cart , add the product
            {
                cartListLocal.cartItems.push({ id: productToBeUpdated.id, quantity: 1 });
            }
        } else if (operationType == "decrement") {
            // if product already exists increment quantity 
            let productFound = cartListLocal.cartItems.find((item) => item.id == productToBeUpdated.id);
            if (productFound) {
               if( productFound.quantity <= 1 )  cartListLocal.cartItems = cartListLocal.cartItems.filter((item) => item.id != productToBeUpdated.id);
               else  productFound.quantity--;
            } 
        } else if (operationType == "delete") {
            // if product already exists increment quantity 
            let productFound = cartListLocal.cartItems.find((item) => item.id == productToBeUpdated.id);
            if (productFound) {
                cartListLocal.cartItems = cartListLocal.cartItems.filter((item) => item.id != productToBeUpdated.id);
            } 
        }

        let cartProducts ={products:  cartListLocal.cartItems.map((item) =>  { return {id: item.id, quantity: item.quantity  } })};



        // dispatch add cart item event to store  
        dispatch(UPDATE_USER_CART({cartId: cartList.cartId, cartProducts: cartProducts}));
    }

    return (
        <div>
            <div className={ styles.searchBarContainer }>

                {props.page == 'productList' ? <>
                <input onInput={ fetchProductsOnUserInput } placeholder="search"></input>
                <label> Category </label>
                <select onInput={ fetchProductOnCategoryInput } placeholder="">
                    { !products.category.length > 0 ? <option value="">Loading...</option> : products.category.map((i) => (

                        <option key={i} value={i}>{i}</option>

                    ))}
                </select>
                </> : 
               <label> My Cart </label>
                }               
                <Link to="/cart"><label className={styles.cartCount}>Items in cart : {cartList.ItemCount}</label></Link></div>
            <div className={styles.productsListContainer}>
                {!products.products.length > 0 ? <h1>Loading Products</h1> : products.products.map((i) => (

                    <ProductCard key={i.id} product={i} quantity={returnQuantity(i.id)} updateCart={updateCart} />

                ))}
            </div>
        </div>
    )
}

export default ProductListing;