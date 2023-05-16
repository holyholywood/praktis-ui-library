import React, { Fragment } from "react";
type listPropsType = {
  list: string[] | number[];
  isOrdered?: boolean;
};

const ListItem = ({ item }: { item: string | number }) => {
  return <li className="text-sm my-2">{item}</li>;
};

const List = ({ list, isOrdered = false }: listPropsType) => {
  return (
    <>
      {isOrdered ? (
        <ol className="list-decimal list-outside ml-4 my-8">
          {list.map((el, i) => {
            return <ListItem item={el} />;
          })}
        </ol>
      ) : (
        <ul className="list-disc list-outside ml-4 my-8">
          {list.map((el, i) => {
            return <ListItem item={el} />;
          })}
        </ul>
      )}
    </>
  );
};

export default List;
