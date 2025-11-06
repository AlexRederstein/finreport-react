import { Link } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";

export default () => {
  const [menuOpened, setMenu] = useState(false);

  // const testApi = async () => {
  //   var res = await fetch("/api/test");
  //   var data = await res.json();
  //   // return data;
  //   console.log(data);
  // };

  // useEffect(() => {
  //   testApi();
  // }, []);

  return (
    <header>
      <Link to="/" className="finreport-label">
        Личный кабинет
      </Link>
      <div>
        <button className="header-button">Организация: Должность</button>
        <button className="header-button" onClick={(e) => setMenu(!menuOpened)}>
          Иванов Иван Иванович
          {menuOpened && <ProfileMenu />}
        </button>
      </div>
    </header>
  );
};

const ProfileMenu = () => {
  return (
    <div className="header-profile-menu">
      <Link to="/">Личный кабинет</Link>
      <Link to="/">Выйти</Link>
    </div>
  );
};
