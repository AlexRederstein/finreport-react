import { AxiosResponse } from "axios";
import {DocumentListResponce} from "../models/DocumentListResponce"
import $api from "../http";

export default class DocumentService  {
    static fetchDocumentList(): Promise<AxiosResponse<DocumentListResponce>> {
        return $api.get<DocumentListResponce>("/get_statements");
    }
}