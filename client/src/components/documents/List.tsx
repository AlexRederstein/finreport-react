import { useParams } from "react-router-dom";
import { statements } from "../../documents/statements";
import StatementInfo from "../../interfaces/document";
import { useEffect, useState } from "react";
import DocumentService from "../../services/DocumentService";

const statuses = ["Черновик", "Отправлен", "В обработке", "Принят", "Отклонён"];
interface DocumentList {
  message: string
}


const List = () => {
  const [list, setlist] = useState<DocumentList>({} as DocumentList)

  const { id } = useParams<{ id: string }>();

  const statement = statements.find((s) => s.id == id);

  if (!statement) {
    console.log("Документа нет");
    return;
  }

  const getDocumentList = async () => {
    try {
      const responce = await DocumentService.fetchDocumentList();
      setlist(responce.data)
    } catch (e) {
      console.log(e)
    }

  } 

  useEffect(() => {
    getDocumentList()
  }, [])

  return (
    <>
      <h1>{statement.nameLabel}</h1>
      <div className="content-container">
        {list.message}
      </div>
    </>
  );
};

export default List;
