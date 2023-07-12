import React, { ReactElement } from "react";
import { GetServerSideProps } from "next";
import PageContentProvider, { pageContent } from "@/components/Common/templates/PageContentProvider";
import Button from "@/components/Button";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(process.env.BASE_URL + "/api/components/organisms/table");
  const result = await response.json();
  return {
    props: {
      pageData: result,
    },
  };
};
const TablePage = ({ pageData }: { pageData: pageContent }) => {
  const { getTableHeaders, getTableRow } = useTable<dummyTableDataType>(dummyTableData, dummyTableColumn);
  return (
    <>
      {pageData.map((item, index) => {
        return <PageContentProvider key={index} content={item.content} type={item.type} />;
      })}
      <div className="my-4">
        <Button onClick={() => console.info(getTableHeaders())}>getTableHeaders</Button>
        <Button onClick={() => console.info(getTableRow())}>getTableRow</Button>
        <table className="border my-8 w-full">
          <thead className="border">
            <tr>
              {getTableHeaders().map((header) => (
                <th className="border" key={header.id}>
                  {header.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getTableRow().rows.map((row) => {
              return (
                <tr>
                  {row.getVisibleCell().map((td) => (
                    <td key={td.id} className="border">
                      {td.cell}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TablePage;

type dummyTableDataType = {
  id: number;
  name: string;
  age: number;
  price: number;
  created_at: string;
};

const dummyTableData: dummyTableDataType[] = [
  {
    age: 10,
    id: 1,
    name: "John",
    price: 10000,
    created_at: "2023-07-03 19:00:00",
  },
];

const dummyTableColumn: defColumn<dummyTableDataType> = [
  { accesor: "id", title: "ID" },
  { accesor: "name", title: "Nama Lengkap" },
  { accesor: "age", title: "Umur" },
  {
    accesor: "price",
    title: "Umur",
    format: {
      currency: formatCurrency,
    },
  },
  { title: "Action", element: (item) => <>this is Action {item.name}</> },
  {
    accesor: "created_at",
    title: "Tgl Dibuat",
    format: {
      date: formatDate,
    },
  },
  { title: "Action", element: (item) => <>this is Action {item.name}</> },
];

type defColumn<T> = {
  accesor?: keyof T;
  title: string;
  element?: (item: T) => ReactElement;
  format?: {
    currency?: (input: any) => string | number;
    date?: (input: any) => string | number;
    other?: {
      [key: string]: (data: T) => void;
    };
  };
}[];
type useTableConfig = {};
const useTable = <T,>(data: T[], columns: defColumn<T>, option?: useTableConfig) => {
  const getTableHeaders: () => { title: string; id: string }[] = (): { title: string; id: string }[] => {
    return columns.map((columnItem, columnIndex) => ({ title: columnItem.title, id: NormalizeIDString(columnItem.title, columnIndex) }));
  };

  const getTableRow = () => {
    const rows = data.map((itemOfData) => {
      const getVisibleCell = () => {
        return columns.map((column) => {
          const getElement = () => {
            if (column.element) {
              return column.element(itemOfData);
            }
            return null;
          };

          const getFormattedValue = () =>
            column.format?.currency
              ? column.format?.currency(itemOfData[column.accesor as keyof T] as number)
              : column.format?.date
              ? column.format?.date(itemOfData[column.accesor as keyof T] as string) ?? "Invalid Date"
              : itemOfData[column.accesor as keyof T];

          return { id: generateRandomID(), cell: getElement() ?? getFormattedValue() ?? null };
        });
      };

      return {
        id: generateRandomID(),
        getVisibleCell,
      };
    });

    return {
      rows,
    };
  };

  return {
    getTableHeaders,
    getTableRow,
  };
};

const NormalizeIDString = (columnName: string, index: number): string => columnName.replace(/\s/g, "").toLowerCase() + index;

function generateRandomID() {
  const randomString = Math.floor(Math.random() * 90000) + 10000;
  return randomString.toString();
}
function formatCurrency(number: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("id-ID", { dateStyle: "short" });
}
