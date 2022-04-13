import React from "react";

const Footer = (props) => {
  return (
    <>
      <div className="row">
        <button className="btn btn-danger col-2" onClick={()=>{
          props.resetQuant()
        }

        }>
          
          Reset</button>
        <div>{props.totalAmount}</div>
        <div className="col-8">
        <button className="btn btn-primary col-2">total</button>

        </div>
      </div>
    </>
  );
};

export default Footer;
