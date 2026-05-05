interface Statement {
  id: string;
  nameLabel: string;
}

export const statements: Statement[] = [
  {
    id: "compensation_of_expenses",
    nameLabel: "Оплата проезда к месту отдыха",
  },
  {
    id: "business_trip_report",
    nameLabel: "Оплата командировки",
  },
];
