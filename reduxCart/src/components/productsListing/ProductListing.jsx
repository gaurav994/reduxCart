import { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";

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
      return  cartList.cartItems.find((product) =>  product.id == productId)? true : false;
    }

return (
<>
<div>
<div> </div>
<div>
{products.length > 0 && products.map((product)=> {
    <ProductCard   product={product}  existsInCart={returnExistsInCart(product.id)}   />
})}
</div>
</div>

</>)
}

export default ProductListing;