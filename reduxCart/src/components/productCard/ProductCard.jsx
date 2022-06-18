import ImageCarousel from '../HelperComponents/ImageCarousel';


const ProductCard = (props) => { 


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
    {props.existsInCart ? <Button onClick={addToCart}>Add to Cart</Button> 
    : <Button onClick={removeFromCart}>Remove from cart</Button>}

</div>
</>)
}

export default ProductCard;

/*
{
    "products": [
      {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "...",
        "images": ["...", "...", "..."]
      },
      {...},
      {...},
      {...}
      // 30 items
    ],
  
    "total": 100,
    "skip": 0,
    "limit": 30
  } */
     