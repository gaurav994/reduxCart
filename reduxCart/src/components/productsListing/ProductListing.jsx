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