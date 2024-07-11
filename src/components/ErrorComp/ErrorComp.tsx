import React from "react";
import styled from "styled-components";
const ErrorStyled = styled.span`
  color: red;
  font-size: 15px;
  margin-left: 20px;
`;
function ErrorComp(props: any) {
  const { measure, ...rest } = props;
  return (
    <ErrorStyled
      style={{
        ...rest, // visibility: errorBool ? "visible" : "hidden",
      }}
    >
      {measure} out of bounds
    </ErrorStyled>
  );
}

export default ErrorComp;
