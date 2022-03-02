import React from "react";

const Button = props => {
  return <a className={"btn btn-" + props.theme}>{props.children}</a>;
};

export default Button;


