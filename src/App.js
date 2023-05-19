import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const selector = useSelector(state => state.cartReducer.cartVisible)
  return (
    <Layout>
      {selector && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
