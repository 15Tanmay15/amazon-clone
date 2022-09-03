import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c0fd8186956349.5da8ed631a9fe.png"
          alt="checkout_ad"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/* <CheckoutProduct /> */}
          {/* <CheckoutProduct /> */}
          {/* <CheckoutProduct /> */}
          {/* <CheckoutProduct /> */}
          {/* <CheckoutProduct /> */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
