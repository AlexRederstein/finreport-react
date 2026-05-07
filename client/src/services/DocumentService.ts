import { AxiosResponse } from "axios";
import { DocumentListResponce, DocumentInstance } from "../models/Document"
import $api from "../http";

export default class DocumentService  {
    static async fetchDocumentList(): Promise<AxiosResponse<DocumentListResponce>> {
        return $api.get<DocumentListResponce>("/get_statements");
    }
}