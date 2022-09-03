import { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Lc7B0SAGjmo6glTv8yziXHeUHfLRULjOk1K5oI9RpMT0ktqlcqjYltKt7y0iDj7wCyUbwfG4aAmgc7Z5eoOSbd900CyHsEWeL"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will run only once when the component loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User logged in/Was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/orders" element={<><Header/><Orders /></>}/>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
