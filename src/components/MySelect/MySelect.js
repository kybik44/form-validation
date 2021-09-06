import React from "react";
import Select from "react-select";
import "./index.css";
import "../../fonts/stylesheet.css";

export const MySelect = React.forwardRef(({ onChange }, ref) => (
  <Select
    ref={ref}
    classNamePrefix="react-select"
    placeholder="-Вибрати-"
    getOptionValue={(option) => option.value}
    options={[
      { value: "вікторина 1", label: "Вікторина 1" },
      { value: "вікторина 2", label: "Вікторина 2" },
      { value: "вікторина 3", label: "Вікторина 3" },
    ]}
    onChange={(e) => {
      onChange(e.value);
    }}
  />
));
