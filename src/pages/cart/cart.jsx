import React, { useContext, useEffect, useState } from "react";
import CartCard from "../../components/cartCard";
import cartContext from "../../context/cartcontext";

export default function Cart() {
  const { cart, setCart } = useContext(cartContext);
  const [decision, setDecision] = useState(false)
  const removeItem = (key) => {
    let arr = cart
    setDecision(confirm("Are you sure?"))
    arr.splice(key, 1)
    setCart(arr)
  }
  useEffect(()=>{
    setDecision(false)
  }, [decision])
  return (
    <div className="container text-center mt-5">
      <div className="row">
        {cart.length
          ? cart.map((item, key) => (
              <div className="col-sm-12 col-md-3" key={key}>
                <div className="">
                  <div className="d-flex flex-row-reverse">
                    <i className="bi bi-x" onClick={()=>removeItem(key)}></i>
                  </div>
                  <div className="card-body">
                    <CartCard data={item} remove={setCart} />
                  </div>
                </div>
              </div>
            ))
          : "Nothing in cart..."}
      </div>
    </div>
  );
}
