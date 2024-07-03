import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AddressPage from "./pages/AddressPage/AddressPage";
import PersonalizeYourCakePage from "./pages/PersonalizeYourCakePage/PersonalizeYourCakePage.jsx";
import PaymentPage from "./pages/PaymentPage/PaymentPage.jsx";
import PaymentConfirmationPage from "./pages/PaymentConfirmationPage/PaymentConfirmationPage.jsx";
import ProductDetail from "./components/details/ProductDetail";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";

import { store } from "./components/redux_api/store.js";
import { Provider } from "react-redux";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/address",
    element: <AddressPage />,
  },
  {
    path: "/personalize-your-cake",
    element: <PersonalizeYourCakePage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/payment-confirm",
    element: <PaymentConfirmationPage />,
  },
];

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="app">
          <Router>
            <Header />
            <Routes>
              {routes.map((route) => {
                return <Route path={route.path} element={route.element} />;
              })}
            </Routes>
            <Footer />
          </Router>
        </div>
      </Provider>
    </>
  );
}

export default App;
