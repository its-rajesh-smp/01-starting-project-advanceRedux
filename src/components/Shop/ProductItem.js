import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { addToServer } from '../../Reducer/cartItemReducer';
import { setVisible } from '../../Reducer/uiReducer';

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { title, price, description } = props;

  const onAddToCart = () => {
    dispatch(setVisible("DATA SENDING"))
    const newItem = { title: title, price: price, description: description }
    dispatch(addToServer(newItem))
  }





  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
