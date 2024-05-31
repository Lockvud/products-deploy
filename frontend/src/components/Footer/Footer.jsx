import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
        <b className="logo">
      CouirerApp
      </b>
          <p>
        
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Компания</h2>
          <ul>
            <li>Главная</li>
            <li>О нас</li>
            <li>Доставка</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Контакты</h2>
          <ul>
            <li>+7-911-122-11-22</li>
            <li>contact-support@delivery.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ CourierApp - Все права защищены.
      </p>
    </div>
  );
};

export default Footer;
