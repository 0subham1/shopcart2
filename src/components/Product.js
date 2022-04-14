import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-4">
      <div className="col-5">
        <h1>
          {props.product.name}

          <span className="badge bg-secondary">{props.product.price}</span>
        </h1>
      </div>

      <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              props.decQuant(props.index);
            }}
          >
            -
          </button>
          <button type="button" class="btn btn-primary">
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              props.incQuant(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className="col-2">
        <span className="badge bg-secondary">
          {props.product.price*props.product.quantity}
        </span>
      </div>
      <button className="btn btn-danger col-2" onClick={()=>{props.removeItem(props.index)}}>
            remove
      </button>
    </div>
  );
}
