import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const Table = (props) => {

  return (
    <table>
      <TableHead headings={props.columns} />
      <TableRow data={props.datasource} />
    </table>
  );
};

export default Table;
