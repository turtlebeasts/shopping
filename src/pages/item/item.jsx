import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cartContext from "../../context/cartcontext";
export default function Item() {
  const {cart, setCart} = useContext(cartContext)
  const { itemID } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${itemID}`
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    getData();
  }, [itemID]);

  const addToCart = () => {
    setCart([...cart, {data, quantity: quantity}])
    alert("Item added to cart")
  }
  return (
    <div>
      {data && !loading ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src={data.image} alt={data.title} className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-6">
              <h3 style={{ fontWeight: 600 }}>{data.title}</h3>
              <p className="fs-5 text-start">{data.description}</p>

              <button
                className="btn btn-warning"
                onClick={() =>
                  quantity <= 1 ? "" : setQuantity((prev) => prev - 1)
                }
              >
                -
              </button>

              <span style={{ padding: 5 }}>{quantity}</span>

              <button
                className="btn btn-warning"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
              <br />
              <button className="btn btn-primary btn-lg mt-2" onClick={addToCart}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container text-center">
          <h3>Loading...</h3>
        </div>
      )}
    </div>
  );
}
