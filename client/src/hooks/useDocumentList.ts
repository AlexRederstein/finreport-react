import { useEffect, useState } from "react";
import StatementInfo from "../interfaces/document";

interface DocumentList {
  data: StatementInfo[] | null;
  loading: boolean;
  error: string | null;
}

export const useDocumentList = (): DocumentList => {
  const [data, setData] = useState<StatementInfo[] | null>(null);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Логика получения данных выносится в useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get_statements");
        if (!response.ok) {
          throw new Error("Ошибка сети: " + response.status);
        }
        const jsonData: StatementInfo[] = await response.json();
        setData(jsonData);
      } catch (err: any) {
        setError(err.message || "Произошла ошибка");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
