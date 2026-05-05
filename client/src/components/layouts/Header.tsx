import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { useContext } from "react";
import { Context } from "../../context/UserContext";

const Header = observer(() => {
  const store = useContext(Context);
  return (
    <header>
      <Link to="/profile">Личный кабинет</Link>
      {store.isAuth ? (
        <div>
          <span>{store.user.name}</span> <button>Выход</button>
        </div>
      ) : (
        ""
      )}
    </header>
  );
});

export default Header;
