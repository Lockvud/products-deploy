import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Регистрация");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Войти") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Войти" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Ваше имя"
              autoComplete="off"
              required
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Ваш email"
            autoComplete="off"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Пароль"
            required
          />
        </div>
        <button type="submit">
          {currState === "Регистрация" ? "Создать аккаунт" : "Войти"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Продолжая, я соглашаюсь с условиями использования и политикой конфиденциальности.</p>
        </div>
        {currState === "Войти" ? (
          <p>
            Создать новый аккаунт?{" "}
            <span onClick={() => setCurrState("Регистрация")}>Перейти</span>
          </p>
        ) : (
          <p>
            У вас уже есть аккаунт?{" "}
            <span onClick={() => setCurrState("Войти")}>Войти здесь</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
