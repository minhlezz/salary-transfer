import React from "react";
import InsuranceEmployee from "./Insurance/InsuranceEmployee";
import InsurancePayType from "./Insurance/InsurancePayType";
import InsuranceRegion from "./Insurance/InsuranceRegion";

const Insurance = (props) => {
  return (
    <React.Fragment>
      <h3>Insurance</h3>
      <InsurancePayType />
      <InsuranceEmployee />
      <InsuranceRegion />
    </React.Fragment>
  );
};

export default Insurance;
