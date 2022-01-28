import React, { useState } from "react";
import classes from "./Insurance.module.css";
import infoImg from "../../images/more-info.png";
import RegionModal from "../UI/RegionModal";
import RadioInput from "../UI/RadioInput/RadioInput";
import Input from "../UI/Input/Input";

const Insurance = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModalHandler = (e) => {
    e.preventDefault();
    setOpenModal((openModal) => !openModal);
  };

  const payforChange = (e) => {
    props.payforChangeHandler(e);
  };

  const regionChange = (e) => {
    props.regionChangeHandler(e);
  };

  const insuranceClasses = classes.insurance + " d-flex flex-column";

  return (
    <React.Fragment>
      {openModal && <RegionModal onClose={toggleModalHandler} />}
      <div className={insuranceClasses}>
        <h3>Insurance</h3>
        <div className={classes.option}>
          <span>Pay for</span>
          <RadioInput
            name="payfor"
            label="full wage"
            value="fullwage"
            checked={props.selectedPayfor === "fullwage"}
            onChange={payforChange}
          />
          <RadioInput
            name="payfor"
            label="other"
            value="other"
            onChange={payforChange}
            checked={props.selectedPayfor === "other"}
          />
          <Input
            type="number"
            id="otherNumber"
            size="large"
            label="VND"
            value={props.otherInput}
            onChange={props.otherInputHandler}
            disabled={props.selectedPayfor === "fullwage"}
          />
        </div>
        <div className={classes.option}>
          <Input
            type="number"
            id="minimumWage"
            size="large"
            preLabel="Minimum wage"
            label="VND"
            value={props.minwage}
            onChange={props.minwageHandler}
          />
          <Input
            type="number"
            id="social"
            size="small"
            preLabel="Social"
            label="%"
            value={props.social}
            onChange={props.socialHandler}
          />
          <Input
            type="number"
            id="health"
            size="small"
            preLabel="Health"
            label="%"
            value={props.health}
            onChange={props.healthHandler}
          />
          <Input
            type="number"
            id="unemployed"
            size="small"
            preLabel="Unemployed"
            label="%"
            value={props.unemployed}
            onChange={props.unemployedHandler}
          />
        </div>
        <div className={classes.option}>
          <span style={{ marginRight: "10px" }}>
            Region
            <a className={classes.infoImg} onClick={toggleModalHandler}>
              <img src={infoImg} alt="more-info" />
            </a>
          </span>
          <RadioInput
            name="region"
            label="I"
            value="one"
            onChange={regionChange}
            checked={props.selectedRegion === "one"}
          />
          <RadioInput
            name="region"
            label="II"
            value="two"
            onChange={regionChange}
            checked={props.selectedRegion === "two"}
          />
          <RadioInput
            name="region"
            label="III"
            value="three"
            onChange={regionChange}
            checked={props.selectedRegion === "three"}
          />
          <RadioInput
            name="region"
            label="IV"
            value="four"
            onChange={regionChange}
            checked={props.selectedRegion === "four"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Insurance;
