import { useNavigate } from "react-router-dom";
import "./Success.css";
const Success = () => {
    const navigate = useNavigate();
  return (
    <form id="myForm">
      <h2 className="h2">Заказ принят. Мы с вами свяжемся в ближайшее время</h2>
      <div className="butn">
      <button id="btn" onClick={() => navigate("/")}>Вернуться</button>
      </div>
    </form>
  );
};

export default Success;
