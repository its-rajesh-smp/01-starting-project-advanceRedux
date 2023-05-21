import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItemArr = useSelector(state => state.cartItemReducer.cartItems)


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItemArr.map((item) => {
            return <CartItem key={Math.random()}
              item={{ title: item.title, quantity: item.quantity, total: (item.quantity * item.price), price: item.price }}
            />
          })
        }

      </ul>
    </Card>
  );
};

export default Cart;
