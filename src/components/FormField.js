import React from "react";
import "bulma/css/bulma.css";

const FormField = (props) => {
  return (
    <div className="field px-6">
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          className="input"
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default FormField;
