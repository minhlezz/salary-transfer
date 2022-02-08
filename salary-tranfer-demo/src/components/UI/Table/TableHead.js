import React from "react";

const convertObjectToArray = (obj) => {
  let newArray = [];
  if (!obj) return;
  obj.map((item) => {
    return newArray.push(item.key);
  });
  return newArray;
};

const TableHead = ({ headings }) => {
  const headers = convertObjectToArray(headings);

  return (
    <thead>
      <tr>
        {headers &&
          headers.map((header, index) => <th key={index}>{header}</th>)}
      </tr>
    </thead>
  );
};

export default TableHead;
