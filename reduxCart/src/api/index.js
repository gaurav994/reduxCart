import axios from 'axios';

const url = 'https://dummyjson.com/';

// products
export const fetchProducts = () => axios.get('url'+'products'); 

export const fetchCategory = () => axios.get('url'+'products/categories');

export const fetchProductsOfCategory = (category) => axios.get(`${url}products/category/${category}`);

export const fetchProductsOnName = (name) => axios.get(`${url}products/search?q=${category}`);

// cart 
export const fetchCartOfUser = (userId) => axios.get(`${url}carts/user/${userId}`);


//export const fetchCategory = () => axios.get('url'+'products/categories');