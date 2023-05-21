import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useEffect } from 'react';
import { fetchFormServer } from './Reducer/cartItemReducer';

function App() {
  const selector = useSelector(state => state.cartReducer.cartVisible)
  const notification = useSelector(state => state.uiSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFormServer())
  }, [])


  return (
    <>
      {notification.isVisible && < Notification message={notification.message} />}
      <Layout>
        {selector && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
