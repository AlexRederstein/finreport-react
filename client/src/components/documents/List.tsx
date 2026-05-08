import { useParams } from "react-router-dom";
import { documentRegistryService } from "../../services/DocumentRegistryService";
import { useFetchList } from "../../hooks/useDocumentList";
import {
  DocumentInstance,
  DocumentStatus,
  DocumentStatusText,
  DocumentStatusColor,
} from "../../models/Document";
import { Link } from "react-router-dom";
import "./List.scss";

const List = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Не указан тип документа</div>;
  }

  const document = documentRegistryService.get(id);

  if (!document) {
    return <div>Документ не найден</div>;
  }

  const { data } = useFetchList();

  if (data) {
    console.log(data);
  }

  return (
    <>
      <h2>{document.name}</h2>
      <div className="content-container ">
        <div>
          <Link to={`/documents/create/${document.id}`}>+ {document.name}</Link>
        </div>
        <div className="document-rows-container">
          {data &&
            data.map((item) => <DocumentRow key={item.guid_doc} item={item} />)}
        </div>
      </div>
    </>
  );
};

interface DocumentRowProps {
  item: DocumentInstance;
}

const DocumentRow = ({ item }: DocumentRowProps) => {
  return (
    <div className="document-row">
      <div className="document-open">
        <button>Заявление от {item.creationDate}</button>
      </div>
      <div className="document-option-1">
        {item.status == DocumentStatus.DRAFT && (
          <button className="red">Удалить</button>
        )}
      </div>
      <div className="document-option-2"></div>
      <div className={`document-status ${DocumentStatusColor[item.status]}`}>
        {DocumentStatusText[item.status]}
      </div>
    </div>
  );
};

export default List;
