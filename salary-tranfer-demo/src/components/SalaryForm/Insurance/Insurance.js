import React from "react";
import classes from "./Insurance.module.css";
import InsurancePayType from "./InsurancePayType";
import InsuranceEmployeeInfo from "./InsuranceEmployeeInfo";
import InsuranceRegion from "./InsuranceRegion";

const Insurance = (props) => {
  const { insuranceDaTa, insunranceChangeHandler } = props;

  const fieldsChangeHandler = (newValues) => {
    insunranceChangeHandler({
      ...insuranceDaTa,
      ...newValues,
    });
  };

  const insuranceClasses = classes.insurance + " d-flex flex-column";

  return (
    <React.Fragment>
      <div className={insuranceClasses}>
        <h3>Insurance</h3>
        <InsurancePayType
          classes={classes}
          fieldsChangeHandler={fieldsChangeHandler}
          payTypeData={insuranceDaTa.payType}
        />
        <InsuranceEmployeeInfo
          classes={classes}
          fieldsChangeHandler={fieldsChangeHandler}
          employeeData={insuranceDaTa.employee}
        />
        <InsuranceRegion
          classes={classes}
          region={insuranceDaTa.region}
          fieldsChangeHandler={fieldsChangeHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Insurance;
