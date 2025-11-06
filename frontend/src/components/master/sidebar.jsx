import { Link } from "react-router-dom";
import "./SideBar.css";

export default () => {
  const profile = [
    ["Профиль", "/"],
    ["Расчетные листки", "/"],
    ["Отчеты", "/"],
    ["Справки", "/"],
  ];
  const vacations = [
    ["Предоставление отпуска", "/"],
    ["График отпусков", "/"],
  ];
  const documents = [
    ["Предоставление отпуска", "/"],
    ["График отпусков", "/"],
    ["Оплата проезда к месту отдыха", "/"],
    ["Оплата командировки", "/"],
  ];

  return (
    <nav className="sidebar">
      <div>
        <SideBarLinks title="Меню" links={profile} />
        <SideBarLinks title="Отпуска" links={vacations} />
        <SideBarLinks title="Заявления" links={documents} />
      </div>
    </nav>
  );
};

const SideBarLinks = ({ title = false, links }) => {
  return (
    <>
      {title ? <div className="ul-title">{title}</div> : false}
      <ul>
        {links.map((item, index) => (
          <li>
            <Link to={item[1]} key={index} className="nav-link">
              {item[0]}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
