import React from "react";
import reactDom from "react-dom";
import Card from "./Card";
import classes from "./RegionModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverLay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>Mức lương tối thiểu vùng 2017</h2>
        <button onClick={props.onClose}>
          <span>&#10006;</span>
        </button>
      </header>
      <div className={classes.content}>
        <div className={classes.zoneSupport}>
          <p>
            <span>- Vùng I:</span>4.420.000 đồng/tháng
          </p>
          <p>
            <span>- Vùng II:</span>3.920.000 đồng/tháng
          </p>
          <p>
            <span>- Vùng III:</span>3.430.000 đồng/tháng
          </p>
          <p>
            <span>- Vùng IV:</span> 3.070.000 đồng/tháng
          </p>
        </div>
        <div className={classes.zoneSupport}>
          <p>
            <span>- Vùng 1:</span>Hà Nội, Quảng Ninh, Đà Nẵng, Tp.HCM, Bình
            Dương, Đồng Nai, Vũng Tàu.
          </p>
          <p>
            <span>- Vùng 2:</span>Hải Phòng, Vĩnh Phúc, Thái Nguyên, Khánh Hoà,
            Bình Phước, Tây Ninh, Long An, An Giang, Cần Thơ, Cà Mau.
          </p>
          <p>
            <span>- Vùng 3:</span>Hà Tây, Bắc Ninh, Hải Dương, Hưng Yên, Huế,
            Bình Định, Gia Lai, Đắc Lắc, Lâm Đồng, Ninh Thuận, Bình Thuận,
            ĐồngTháp, Tiền Giang, Vĩnh Long, Bến Tre, Kiên Giang, Hậu Giang, Sóc
            Trăng, Bạc Liêu.
          </p>
          <p>
            <span>- Vùng 4:</span>là các tỉnh còn lại
          </p>
        </div>
      </div>
    </Card>
  );
};

const RegionModal = (props) => {
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {reactDom.createPortal(
        <ModalOverLay onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default RegionModal;
