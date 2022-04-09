import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

function App() {
const productList =[
  {
    name: "book1",
    price: 200,
    quantity:0
  },
  {
    name: "book2",
    price: 300,
    quantity:0
  }
]

  return (
    <>
     <Navbar/>
     <ProductList productList={productList} />
     <Footer/>

    </>
  );
}

export default App;
