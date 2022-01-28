import React from "react";
import Button from "../UI/Button";

const TransferOption = (props) => {
  return (
    <div className="d-flex justify-center">
      <Button type="submit">GROSS &rarr; NET</Button>
      <Button>NET &rarr; GROSS</Button>
      <Button disabled>Print</Button>
    </div>
  );
};

export default TransferOption;
