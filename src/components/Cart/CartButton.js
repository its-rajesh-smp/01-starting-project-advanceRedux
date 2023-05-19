import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { toggleCard } from '../../Reducer/cartReducer';

const CartButton = (props) => {

  const dispatch = useDispatch()
  return (
    <button onClick={() => { dispatch(toggleCard()) }} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
