import React from "react";
import { TableColumnType } from ".";

const Table = () => {
  return (
    <table className="w-full rounded-sm overflow-hidden">
      <thead className="bg-secondary/20">
        <tr className="text-left ">
          {TableColumn.map((el) => {
            return (
              <th key={el.accesor} className=" py-4 px-2">
                {el.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="">
        {TableData.map((el, i) => {
          const tableAccesor = TableColumn.map((column) => column.accesor);
          return (
            <tr key={i} className={isOddRow(i) ? "bg-secondary/10" : ""}>
              {tableAccesor.map((tableData, index) => {
                return (
                  <td key={index} className="  p-2">
                    {el[tableData]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

const TableColumn: TableColumnType = [
  { accesor: "name", formatCurrency: false, name: "Name", position: "center", isNumber: false },
  { accesor: "age", formatCurrency: false, name: "Age", position: "center", isNumber: false },
  { accesor: "from", formatCurrency: false, name: "From", position: "center", isNumber: false },
];

type tableDataType = { [key in (typeof TableColumn)[number]["accesor"]]: any };
const TableData: tableDataType[] = [
  {
    name: "Dito",
    age: "22",
    from: "Tangerang",
  },
  {
    name: "Uni",
    age: "22",
    from: "Tangerang",
  },
];

const isOddRow = (index: number) => {
  return index % 2 !== 0;
};
