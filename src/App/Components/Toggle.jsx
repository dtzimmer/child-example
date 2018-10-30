import React from "react";
import { Checkbox } from "semantic-ui-react";

const Toggle = props => {
  return (
    <Checkbox toggle onClick={props.handleToggle} className="toggle-button" />
  );
};

export default Toggle;
