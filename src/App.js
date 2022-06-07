import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductItem from "./components/products/ProductItem";

function App() {
  return (
    <div>
        <Header />
        <ProductItem prodName="Apple Watch 2" prodPrice="230"/>
        <ProductItem prodName="Apple Watch 3" prodPrice="250"/>
        <ProductItem prodName="Apple Watch 4" prodPrice="500"/>
        
        <Footer company="Namost" email="nanthawatkty.work@gmail.com"/>
    </div>
  );
}

export default App;
