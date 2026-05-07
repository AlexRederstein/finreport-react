import { DocumentTypeMetaData } from "../models/Document";

export const BusinessTrip: DocumentTypeMetaData = {
    id: "business_trip",
    name: "Оплата командировки",
    description: "",
    rules: {
        avans: true,
        border_crossing: true
    },
    fields: [
        {id: '1', label: "тест оплаты командировки", type: "text"}
    ]
}