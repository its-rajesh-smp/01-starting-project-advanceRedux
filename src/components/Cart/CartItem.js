import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { addToServer, deleteFromServer } from '../../Reducer/cartItemReducer';
import { setVisible } from '../../Reducer/uiReducer';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch()

  const onDeleteFromCart = () => {
    dispatch(setVisible("DATA SENDING"))
    dispatch(deleteFromServer(title, quantity))
  }

  const onIncreamentBtnClick = () => {
    dispatch(setVisible("DATA SENDING"))
    dispatch(addToServer({ title: title, quantity: quantity, price: price }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onDeleteFromCart}>-</button>
          <button onClick={onIncreamentBtnClick}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
