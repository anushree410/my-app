import React from "react";
import "./Input.css";
import { TextField } from "@mui/material";
// import styled from "styled-components";

function Input(props: any) {
  const { size = "medium", label, binding, ...rest } = props;
  // const NewTextField = styled(TextField)``
  return (
    <TextField
      className={`input ${size}`}
      type="number"
      variant="standard"
      label={label}
      {...binding}
      {...rest}
    />
  );
}

export default Input;
