import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const products = [
    {
      name: "book1",
      price: 200,
      quantity: 0,
    },
    {
      name: "book2",
      price: 300,
      quantity: 0,
    },
    {
      name: "book3",
      price: 400,
      quantity: 0,
    },
  ];

  let [productList, setproductList] = useState(products);
  const incQuant = (index) => {
    let newproductList = [...productList];
    newproductList[index].quantity++;
    setproductList(newproductList);
  };
  const decQuant = (index) => {
    let newproductList = [...productList];
    newproductList[index].quantity > 0 ? 
    newproductList[index].quantity-- : 
    newproductList[index].quantity=0
    setproductList(newproductList);
  };

  return (
    <>
      <Navbar />
      <main className="container">
        <ProductList
          productList={productList}
          incQuant={incQuant}
          decQuant={decQuant}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
