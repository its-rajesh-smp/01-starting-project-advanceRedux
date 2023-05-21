import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

function App() {
  const selector = useSelector(state => state.cartReducer.cartVisible)
  const notification = useSelector(state => state.uiSlice)

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
