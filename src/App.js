import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AddressPage from "./pages/AddressPage/AddressPage";
import PersonalizeYourCakePage from "./pages/PersonalizeYourCakePage/PersonalizeYourCakePage.jsx";
import PaymentPage from "./pages/PaymentPage/PaymentPage.jsx";
import PaymentConfirmationPage from "./pages/PaymentConfirmationPage/PaymentConfirmationPage.jsx";

const router = createBrowserRouter([
  {
    path: "/cart",
    element: <h1>Cart</h1>
  },
  {
    path: "/address",
    element: <AddressPage/>,
  },
  {
    path: "/personalize-your-cake",
    element: <PersonalizeYourCakePage/>,
  },
  {
    path: "/payment",
    element: <PaymentPage/>,
  },
  {
    path: "/payment-confirm",
    element: <PaymentConfirmationPage/>,
  },
]);

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

export default App;
