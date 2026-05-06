import { useContext, useState } from "react";
import { Context } from "../../context/UserContext";
import InputContainer from "../ui/InputContainer";
import {ControlInput} from "../ui/Input";
import { Link } from "react-router-dom";
import "./auth.scss"

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const store = useContext(Context);

  return (
    <div className="auth-font">
      <div className="auth-form content-container">
        <span>Вход в личный кабинет</span>
        <InputContainer>
          <ControlInput
            type="text"
            label="Почта"
            value={email}
            onChange={setEmail}
          />
          <ControlInput
            type="text"
            label="Пароль"
            value={password}
            onChange={setPassword}
          />
        </InputContainer>
        <button onClick={() => store.login(email, password)}>Войти</button>
        <Link to="/registration">Регистрация</Link>
      </div>
    </div>
  );
};

export default Login;
