export type TableFieldType = {
  name: string;
  accesor: string;
  isNumber?: boolean;
  position: "left" | "center" | "right";
  formatCurrency: boolean;
};

export type TableColumnType = TableFieldType[];
