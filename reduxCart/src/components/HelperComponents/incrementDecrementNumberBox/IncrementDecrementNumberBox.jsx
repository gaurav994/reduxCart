import styles from './IncrementDecrementNumberBox.module.css';

const IncrementDecrementNumberBox = (props) => {
    return (
    <div className={styles.incDecInputContainerDiv}>
<button onClick={() => props.updateQuantity(-1)}> - </button>
<input type="number" value ={props.quantity} readOnly ></input>
<button onClick={() => props.updateQuantity(1)}> + </button>
    </div>
    )
}

export default IncrementDecrementNumberBox;