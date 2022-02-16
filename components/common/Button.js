import React from "react";

const Button = props => {
  return <button className={"btn btn-" + props.theme}>{props.children}</button>;
};

export default Button;
