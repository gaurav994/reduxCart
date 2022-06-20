import { useSelector } from "react-redux";

import ProductListing from "../productsListing/ProductListing";

const cart = () => 
{
    const products = useSelector((state) => state.products);
    const cartList = useSelector((state) => state.cart);
    let productsPresentInCart  ={ products: products.products.filter((item) => cartList.cartItems.find(a => a.id == item.id)) , category: []}

    return ( 
    <>
    <ProductListing products = {productsPresentInCart} cartList={cartList} page ='cartList' />
    </> 
    )
}
export default cart;