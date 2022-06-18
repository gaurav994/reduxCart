import { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";

import ProductCard from "../productCard/productCard";



const ProductListing = () => {

    const products = useSelector((state) => state.products);
    const cartList = useSelector((state) => state.cart);
   

    const returnExistsInCart = (productId) => {
      return  cartList.cartItems.find((product) =>  product.id == productId)? true : false;
    }

return (
<div>
<div> <h1>this is product listing page</h1></div>
<div>
{!products.products.length > 0 ? <h1>Loading Products</h1> :  products.products.map((i)=> (
 
    <ProductCard key={i.id}  product={i}  existsInCart={returnExistsInCart(i.id)}   />
   
))}
</div>
</div>
)
}

export default ProductListing;