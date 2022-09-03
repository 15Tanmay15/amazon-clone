import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        if (user) {
          const ref = collection(db, "users", user?.uid, "orders");
          const snapshot = await getDocs(query(ref, orderBy("created", "desc")));
          setOrders(snapshot.docs.map((doc) => {
            return {id: doc.id, data: doc.data()}
          })
          )
        } else {
          return <h1>User not found</h1>
        }
      } catch(e){
        return <h1>Error catch</h1>
      }
    })()
    
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
        {/* {renderOrders()} */}
      </div>
    </div>
  );
}

export default Orders;
