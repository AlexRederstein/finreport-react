export interface DocumentField {
  name: string;
  type: 'text' | 'date' | 'number' | 'select' | 'textarea';
  requred?: boolean;
  options?: string[];  
}

interface DocumentFieldGroup {
  id: string;
  fields: DocumentField[];
} 

export interface DocumentTypeMetaData {
  id: string;
  name: string;
  description: string;
  rules: {
    avans: boolean;
    border_crossing: boolean;
  }
  fields: DocumentFieldGroup[];
  // fields: (DocumentFieldGroup | DocumentField)[];
}

export enum DocumentStatus {
  DRAFT = 0,
  READY = 1,
  IN_PROGRESS = 2,
  ACCEPT = 3,
  REJECT = 4
}

export const DocumentStatusText: Record<DocumentStatus, string> = {
  [DocumentStatus.DRAFT]: "Черновик",
  [DocumentStatus.READY]: "Отправлен",
  [DocumentStatus.IN_PROGRESS]: "На исполнении",
  [DocumentStatus.ACCEPT]: "Принят",
  [DocumentStatus.REJECT]: "Отклонён"
}

export const DocumentStatusColor: Record<DocumentStatus, string> = {
  [DocumentStatus.DRAFT]: "black",
  [DocumentStatus.READY]: "blue",
  [DocumentStatus.IN_PROGRESS]: "blue",
  [DocumentStatus.ACCEPT]: "green",
  [DocumentStatus.REJECT]: "red"

}

export interface DocumentInstance {
  guid_doc: string;
  creationDate: string;
  status: DocumentStatus;
}

export interface DocumentListResponce {
    list: DocumentInstance[];
}