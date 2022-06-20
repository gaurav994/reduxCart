import ImageCarousel from '../HelperComponents/ImageCarousel/ImageCarousel';
import IncrementDecrementNumberBox from '../HelperComponents/incrementDecrementNumberBox/IncrementDecrementNumberBox';
import styles from './ProductCard.module.css';

const ProductCard = (props) => { 

    const updateQuantity = (updatebyNumber) => {
        if(updatebyNumber > 0 ) props.updateCart("add",props.product);
        else props.updateCart("decrement",props.product);
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
    
    {!props.quantity > 0 ? <button onClick={() =>  props.updateCart("add",props.product)}>Add to Cart</button> 
    : <> <IncrementDecrementNumberBox quantity = {props.quantity} updateQuantity = {updateQuantity}/>
    <button onClick={() => props.updateCart("delete",props.product)}>Remove from cart</button>
     </>}
    </div>

</div>
</>)
}

export default ProductCard;
