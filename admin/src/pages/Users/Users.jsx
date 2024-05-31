import React from "react";
import "./Users.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Users = ({ url }) => {
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

  const removeOrder = async (orderId) => {
    const response = await axios.post(`${url}/api/order/remove`, {
      id: orderId,
    });
    await fetchAllOrders();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="list add flex-col">
      <p>Список всех пользователей</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Имя</b>
          <b>Фамилия</b>
          <b>Email</b>
          <b>Номер</b>
          <b>Пароль</b>
          <b>Удалить</b>
        </div>
        {orders.map((order, index) => (
          <>
            <div key={index} className="list-table-format">
              <p>{order.address.firstName}</p>
              <p>{order.address.lastName}</p>
              <p>{order.address.email}</p>
              <p>{order.address.phone}</p>
              <p>**************</p>
              <p onClick={() => removeOrder(order._id)} className="cursor">
                X
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Users;
