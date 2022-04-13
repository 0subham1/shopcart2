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
  let [totalAmount, settotalAmount] = useState(0);

  const incQuant = (index) => {
    let newproductList = [...productList];
    let newtotalAmount = totalAmount;

    newproductList[index].quantity++;
    newtotalAmount += newproductList[index].price;

    setproductList(newproductList);
    settotalAmount(newtotalAmount);
  };

  const decQuant = (index) => {
    let newproductList = [...productList];
    let newtotalAmount = totalAmount;
    
    if (newproductList[index].quantity > 0) {
      newproductList[index].quantity--;
      newtotalAmount -= newproductList[index].price;
    }

    settotalAmount(newtotalAmount);
    setproductList(newproductList);
  };
  
  const resetQuant =()=>{
    let newproductList = [...productList];
    newproductList.map((products)=>{
      products.quantity=0
    })
    setproductList(newproductList);
    settotalAmount(0);
  }

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
      <Footer totalAmount={totalAmount} resetQuant={resetQuant}/>
    </>
  );
}

export default App;
