import { useContext, useState } from "react";
import { Context } from "../../context/UserContext";

const Login = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const store = useContext(Context);

  return (
    <div>
      <input
        type="text"
        placeholder="Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => store.login(login, password)}>login</button>
    </div>
  );
};

export default Login;
