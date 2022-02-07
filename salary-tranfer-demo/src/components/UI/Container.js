import React from "react";

const containerClasses = {
  margin: "0 auto",
  maxWidth: "600px",
  paddingTop: '50px',
  paddingBottom: '200px'
};

const Container = (props) => {
  return <div style={containerClasses}>{props.children}</div>;
};

export default Container;
