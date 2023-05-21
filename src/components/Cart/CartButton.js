import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { toggleCard } from '../../Reducer/cartReducer';

const CartButton = (props) => {
  const selector = useSelector(state => state.cartItemReducer.totalCartCounter)

  const dispatch = useDispatch()
  return (
    <button onClick={() => { dispatch(toggleCard()) }} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{selector}</span>
    </button>
  );
};

export default CartButton;
