import { Link } from "react-router-dom";
import { documentRegistryService } from "../../services/DocumentRegistryService";
import { DocumentTypeMetaData } from "../../models/Document";

const SideBar = () => {
  
  const compensation_of_expenses = documentRegistryService.get("compensation_of_expenses")
  const business_trip = documentRegistryService.get("business_trip")
  

  return (
    <nav className="sidebar">
      <div className="nav-header">Завления</div>
      <ul>
        <SideNav document={compensation_of_expenses} /> 
        <SideNav document={business_trip} /> 
      </ul>
    </nav>
  );
};

interface SideNavProps {
  document: DocumentTypeMetaData | undefined;
}

const SideNav :React.FC<SideNavProps> = ({document}) => {
  if(document) {
    return <li key={document.id}><Link to={`documents/${document.id}`}>{document.name}</Link></li>
  } else {
    console.warn("Ошибка создания боковой кнопки навигации!")
  }
}

export default SideBar;
