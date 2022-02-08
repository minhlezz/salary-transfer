import React from "react";

const convertObjectElementsToArrayObject = (object) => {
  let newArrayObject = [];
  for (let key in object) {
    newArrayObject.push({
      value: object[key],
    });
  }
  return newArrayObject;
};

const TableRow = (props) => {
  const tableData = props.data;
  const tRow = tableData?.map((item) => {
    let rowData = convertObjectElementsToArrayObject(item);
    //Remove the first column;
    rowData = rowData.slice(1);

    return (
      <tr key={item.key}>
        {rowData.map((item, index) => {
          return <td key={index}>{item.value}</td>;
        })}
      </tr>
    );
  });

  return (
    <tbody>
      {tRow}
    </tbody>
  );
};

export default TableRow;
