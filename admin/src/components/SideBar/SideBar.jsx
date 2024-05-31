import React from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Добавить продукты</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Список продуктов</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Заказы</p>
        </NavLink>
        <NavLink to="/users" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Пользователи</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
