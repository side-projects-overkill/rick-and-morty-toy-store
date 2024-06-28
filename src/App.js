import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AddressPage from "./pages/AddressPage/AddressPage"
import PersonalizeYourCakePage from "./pages/PersonalizeYourCakePage/PersonalizeYourCakePage.jsx"
import PaymentPage from "./pages/PaymentPage/PaymentPage.jsx";
import PaymentConfirmationPage from "./pages/PaymentConfirmationPage/PaymentConfirmationPage.jsx";

function App() {
  return (
    <>
      <div className="app">
        <Header/>
          {/* <AddressPage/> */}
          {/* <PersonalizeYourCakePage/> */}
          <PaymentPage/>
          {/* <PaymentConfirmationPage/> */}
        <Footer/>
      </div>
    </>
  );
}

export default App;
