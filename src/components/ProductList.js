import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  console.log(props);
  //   map product prop  in productList prop
  return props.productList.map((product, i) => {
    return (
      <Product product={product} key={i} 
      incQuant={props.incQuant} index={i}
      decQuant={props.decQuant} 
      
      />
    );
  });
}
