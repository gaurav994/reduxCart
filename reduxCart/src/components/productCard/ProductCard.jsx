import ImageCarousel from '../HelperComponents/ImageCarousel';
import styles from './ProductCard.module.css';

const ProductCard = (props) => { 

const addToCart = () => {
// dispatch add cart item event to store 

}
const removeFromCart = () => {
    // dispatch remove cart item event to store  use props.product.id
    
}

return (
<>
<div className={styles.productCardContainer}> 
    <ImageCarousel  images={props.product.images}></ImageCarousel>
    <div className={styles.productCardDetailsContainer}>
    <label>Product Name : {props.product.title}</label>
    <label>Price : {props.product.price}</label>
    <label>Description: {props.product.description}</label>
    <label>Category: {props.product.category}</label>
    </div>
    <div className={styles.productCardButtonContainer}>
   
    <label>Rating: {props.product.rating}</label>
    
    {!props.existsInCart ? <button onClick={addToCart}>Add to Cart</button> 
    : <button onClick={removeFromCart}>Remove from cart</button>}
    </div>

</div>
</>)
}

export default ProductCard;
