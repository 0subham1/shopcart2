import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const productList = [
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

  let [prodList, setprodList] = useState("");
  const incQuant = (index) => {
    let newprodList = [...prodList];
    newprodList[index].quantity++;
    setprodList(newprodList);
  };
  const decQuant = (index) => {
    let newprodList = [...prodList];
    newprodList[index].quantity > 0 ? 
    newprodList[index].quantity-- : 
    newprodList[index].quantity=0
    setprodList(newprodList);
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
