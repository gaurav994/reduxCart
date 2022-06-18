import ImageCarousel from '../HelperComponents/ImageCarousel';

const ProductCard = (props) => { 
console.log(props);
const addToCart = () => {
// dispatch add cart item event to store 
}
const removeFromCart = () => {
    // dispatch remove cart item event to store  use props.product.id
    
}

return (
<>
<div> 
    <ImageCarousel images={props.product.images}></ImageCarousel>
    <label>`Product Name : ${props.product.title}`</label>
    <label>`Price : ${props.product.price}`</label>
    <label>`Description: ${props.product.description}`</label>
    <label>`Category: ${props.product.category}`</label>
   
    <label>`Rating: ${props.product.rating}`</label>
    {!props.existsInCart ? <button onClick={addToCart}>Add to Cart</button> 
    : <button onClick={removeFromCart}>Remove from cart</button>}

</div>
</>)
}

export default ProductCard;
