import React, { useState } from "react";
import RadioInput from "../../UI/RadioInput/RadioInput";
import RegionModal from "../../UI/RegionModal";
import infoImg from "../../../images/more-info.png";

const regions = [
  { region: "I", value: "I" },
  { region: "II", value: "II" },
  { region: "III", value: "III" },
  { region: "IV", value: "IV" },
];

const InsuranceRegion = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModalHandler = (e) => {
    e.preventDefault();
    setOpenModal((openModal) => !openModal);
  };

  const regionChangeHandler = (e) => {
    props.fieldsChangeHandler({
      region: e.target.value,
    });
  };

  const supportedRegion = regions.map((item, index) => {
    return (
      <RadioInput
        key={index}
        name="region"
        label={item.region}
        value={item.value}
        onChange={regionChangeHandler}
        checked={props.region === item.value}
      />
    );
  });

  return (
    <React.Fragment>
      {openModal && <RegionModal onClose={toggleModalHandler} />}
      <span style={{ marginRight: "10px" }}>
        Region
        <a
          href="/"
          className={props.classes.infoImg}
          onClick={toggleModalHandler}
        >
          <img src={infoImg} alt="more-info" />
        </a>
      </span>
      <div className={props.classes.option}>{supportedRegion}</div>
    </React.Fragment>
  );
};

export default InsuranceRegion;
