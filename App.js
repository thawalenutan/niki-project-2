import React, {  } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInDialog from './common/Header/Dialog/SignInDialog';
import SignUpDialog from './common/Header/Dialog/SignUpDialog';
import ProductPage from './components/product/ProductPage';
import ProductDetailPage from './components/product/ProductDetailPage';
// import Home from './components/Home/Home';

export default function Eshop() {
  // const [showProductDetails, setShowProductDetails] = useState(false);

  const onBuy = () => {
    console.log("buy clicked");
    // setShowProductDetails(true);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProductDetailPage />} />
          <Route exact path="/sign-in" element={<SignInDialog />} />
          <Route exact path="/sign-up" element={<SignUpDialog />} />
          <Route exact path="/product-page" element={<ProductPage onBuy={onBuy} />} />
          {/* {showProductDetails && (
            <Route exact path="/product-details" element={<ProductDetailPage />} />
          )} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}