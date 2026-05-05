import { statements } from "../../documents/statements";
import { Link } from "react-router-dom";

const SideBar = () => {
  // console.log(statements);
  return (
    <nav className="sidebar">
      <ul>
        {statements.map((item) => (
          <li key={item.id}>
            <Link to={`documents/${item.id}`}>{item.nameLabel}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
