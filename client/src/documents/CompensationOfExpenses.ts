import { DocumentTypeMetaData } from "../models/Document";

export const CompensationOfExpenses: DocumentTypeMetaData = {
  id: "compensation_of_expenses",
  name: "Оплата проезда к месту отдыха",
  description: "",
  rules: {
    avans: true,
    border_crossing: false,
  },
  sections: [
    {
      id: "employee_data",
      label: "Данные работника",
      isTable: false,
      groups: [
        {
          rows: [
            {
              label: "Период отпуска",
              inputs: [
                { name: "startDate", type: "date" },
                { name: "endDate", type: "date" },
              ],
            },
            {
              label: "Период компенсации",
              inputs: [
                { name: "compensationStartDate", type: "date" },
                { name: "compensationEndDate", type: "date" },
              ],
            },
            {
              label: "Страна",
              inputs: [{ name: "country", type: "text" }],
            },
            {
              label: "Населённый пункт",
              inputs: [{ name: "town", type: "text" }],
            },
          ],
        },
      ],
    },
    {
      id: "table1",
      label: "Состав семьи",
      isTable: true,
      groups: [
        {
          className: "form-inputs-container-borders",
          rows: [
            {
              label: "Подтвердающий документ",
              inputs: [{ name: "confirm_document", type: "text" }],
            },
            {
              label: "Номер документа",
              inputs: [
                { name: "number", type: "text" },
                { name: "date_issue", type: "date" },
              ],
            },
          ],
        },
        {
          className: "form-inputs-container-borders",
          rows: [
            {
              label: "Фамилия",
              inputs: [{ name: "lastname", type: "text" }],
            },
            {
              label: "Имя",
              inputs: [{ name: "name", type: "text" }],
            },
            {
              label: "Отчество",
              inputs: [{ name: "surename", type: "text" }],
            },
          ],
        },
        {
          className: "form-inputs-container-borders",
          rows: [
            {
              label: "Степень родства",
              inputs: [{ name: "confirm_document", type: "select" }],
            },
            {
              label: "Дата рождения",
              inputs: [{ name: "number", type: "date" }],
            },
          ],
        },
      ],
    },
    {
      id: "table2",
      label: "Проезд",
      isTable: true,
      groups: [
        {
          className: "form-inputs-container-borders",
          rows: [
            {
              label: "Вид документа",
              inputs: [{ name: "document_type", type: "text" }],
            },
            {
              label: "Номер документа",
              inputs: [
                { name: "document_number", type: "text" },
                { name: "document_date", type: "date" },
              ],
            },
          ],
        },
        {
          className: "form-inputs-container-borders",
          rows: [
            {
              label: "Вид транспорта",
              inputs: [{ name: "transport", type: "select" }],
            },
            {
              label: "Пункт отправления",
              inputs: [
                { name: "point_departure", type: "text" },
                { name: "date_departure", type: "date" },
              ],
            },
            {
              label: "Пункт прибытия",
              inputs: [
                { name: "point_arrival", type: "text" },
                { name: "date_arrival", type: "date" },
              ],
            },
            {
              label: "Норматив",
              inputs: [{ name: "normative", type: "select" }],
            },
          ],
        },
        {
          className: "form-inputs-container-borders",
          rows: [
            {
              label: "Стоимость",
              inputs: [{ name: "price", type: "number" }],
            },
            {
              label: "Способ выплаты",
              inputs: [{ name: "provision", type: "select" }],
            },
          ],
        },
      ],
    },
    {
      id: "table3",
      label: "Прочие расходы",
      isTable: true,
      groups: [
        {
          className: "form-inputs-container-borders",
          rows: [
            {
              label: "Вид документа",
              inputs: [{ name: "document_name", type: "text" }],
            },
            {
              label: "Номер документа",
              inputs: [
                { name: "document_number", type: "text" },
                { name: "document_date", type: "date" },
              ],
            },
          ],
        },
        {
          className: "form-inputs-container-borders",
          rows: [
            {
              label: "Наимернование расхода",
              inputs: [{ name: "expense_name", type: "text" }],
            },
            {
              label: "Количество",
              inputs: [{ name: "quantity", type: "number" }],
            },
            {
              label: "Сумма",
              inputs: [{ name: "price", type: "text" }],
            },
          ],
        },
        {
          className: "form-inputs-container-borders",
          rows: [
            {
              label: "Способ выплаты",
              inputs: [{ name: "provision", type: "select" }],
            },
          ],
        },
      ],
    },
    {
      id: "cash_data",
      label: "Денежные средства",
      isTable: false,
      groups: [
        {
          rows: [
            {
              label: "Выдача денежных средств",
              inputs: [{ name: "method_transfer", type: "select" }],
            },
            {
              label: "Приложение",
              inputs: [
                { name: "pril", type: "text" },
                { name: "doclist", type: "text" },
              ],
            },
            {
              label: "Комментарий",
              inputs: [{ type: "textarea", name: "comment" }],
            },
          ],
        },
      ],
    },
  ],
};
