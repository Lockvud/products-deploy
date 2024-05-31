import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Продукты</p>
          <p>Название</p>
          <p>Цена</p>
          <p>Кол-во</p>
          <p>Сумма</p>
          <p>Удалить</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₽{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₽{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Сумма к оплате</h2>
          <div>
            <div className="cart-total-details">
              <p>Подытог</p>
              <p>₽{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Стоимость доставки</p>
              <p>₽{getTotalCartAmount() === 0 ? 0 : 200}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Итог</b>
              <b>
              ₽{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 200}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
          Перейти к оформлению заказа
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Если у вас есть промокод, введите его здесь</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Введите промокод" />
              <button>Подтвердить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
