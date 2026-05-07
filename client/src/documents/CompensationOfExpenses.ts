import { DocumentTypeMetaData } from "../models/Document";

export const CompensationOfExpenses: DocumentTypeMetaData = {
    id: "compensation_of_expenses",
    name: "Оплата проезда к месту отдыха",
    description: "",
    rules: {
        avans: true,
        border_crossing: false
    },
    fields: [
        {
            id: "employee_data",
            fields: [
                {type: "text", name: "country"},
                {type: "text", name: "town"},
                {type: "date", name: "startDate"},
                {type: "date", name: "endDate"},
            ]
        },
        {
            id: "cash_data",
            fields: [
                {type: "select", name: "method_ransfer"},
                {type: "textarea", name: "comment"},
            ]
        }
    ]
        
}