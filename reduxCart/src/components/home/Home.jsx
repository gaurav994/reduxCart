import { useSelector } from "react-redux";

import ProductListing from "../productsListing/ProductListing";

const Home = () => {
    
    const products = useSelector((state) => state.products);
    const cartList = useSelector((state) => state.cart);

    return ( 
    <>
    <ProductListing products = {products} cartList={cartList} page ='productList' />
    </> 
    )
}

export default Home;