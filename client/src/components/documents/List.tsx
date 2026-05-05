import { useParams } from "react-router-dom";
import { statements } from "../../documents/statements";
import { useDocumentList } from "../../hooks/useDocumentList";
import StatementInfo from "../../interfaces/document";

const statuses = ["Черновик", "Отправлен", "В обработке", "Принят", "Отклонён"];

const List = () => {
  // const [rows, setRows] = useState<StatementInfo[] | null>(null);

  const { data, loading, error } = useDocumentList();

  const { id } = useParams<{ id: string }>();

  const statement = statements.find((s) => s.id == id);

  if (!statement) {
    console.log("Документа нет");
    return;
  }

  return (
    <>
      <h1>{statement.nameLabel}</h1>
      <div className="content-container">
        {data ? data.map((item) => generateRows(item)) : false}
      </div>
    </>
  );
};

const generateRows = (row: StatementInfo) => {
  return (
    <div key={row.guid_doc}>
      <span>Заявление от {row.creationDate}</span>
      <span>{statuses[row.status]}</span>
    </div>
  );
};

export default List;
