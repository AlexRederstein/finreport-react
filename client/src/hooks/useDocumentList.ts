import { useEffect, useState } from "react";
import { DocumentInstance } from "../models/Document";
import DocumentService from "../services/DocumentService";

export const useFetchList = () => {
    const [ data, setData ] = useState<DocumentInstance[]>([])

    const fetchData = async () => {
        try {
            const response = await DocumentService.fetchDocumentList();
            setData(response.data.list);
        } catch(e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchData()
    }, []);
    return { data }
}


// interface DocumentList {
//   data: StatementInfo[] | null;
//   loading: boolean;
//   error: string | null;
// }

// export const useDocumentList = (): DocumentList => {
//   const [data, setData] = useState<StatementInfo[] | null>(null);
//   const [loading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Логика получения данных выносится в useEffect
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/get_statements");
//         if (!response.ok) {
//           throw new Error("Ошибка сети: " + response.status);
//         }
//         const jsonData: StatementInfo[] = await response.json();
//         setData(jsonData);
//       } catch (err: any) {
//         setError(err.message || "Произошла ошибка");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { data, loading, error };
// };
