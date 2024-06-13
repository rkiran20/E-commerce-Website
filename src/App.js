import React from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import Productcard from './components/Productcard';
import CartPage from './components/CartPage';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={appStore} >
      <div>
        <Header  />
        <Outlet  />
        <Footer />
      </div>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path:"/",
        element: <Body />,
      },
      {
        path: "/clothing",
        element: <ProductPage />,
      },
      {
        path: "/jewelery",
        element: <ProductPage />
      },
      {
        path: "/electronics",
        element: <ProductPage />
      },
      {
        path:"/clothing/123",
        element: <Productcard />,
      },
      {
        path: "/cart",
        element: <CartPage />
      }
    ]
  }
])

export default App;
