import React from "react";
import "./Orders.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import YaMap from "../../components/Map/YaMap";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.data) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Заказы</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <><div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{"ул." + order.address.street + ","}</p>
                <p>{order.address.state.length === 0 && "г." + order.address.city + ","}</p>
                <p>{order.address.state.length > 0 && "г." + order.address.city  + "," + " обл." + order.address.state + ","}</p>
                <p>
                  {
                    "подъезд " +
                    order.address.country +
                    ", кв. " +
                    order.address.zipCode
                    }
                </p>
              </div>
              <p className="order-item-phone">{"Номер телефона: " + order.address.phone}</p>
            </div>
            <p>Продукт : {order.items.length}</p>
            <p>₽{order.amount}</p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
            >
              <option value="Новый заказ">Новый заказ</option>
              <option value="В процессе доставки">В процессе доставки</option>
              <option value="Доставлен">Доставлен</option>
            </select>
              <YaMap />
          </div>
            </>
        ))}
      </div>
    </div>
  );
};

export default Orders;
