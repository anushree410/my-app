import React from "react";
import styled from "styled-components";

export default function Center(props: any) {
  const Centred = styled.div`
    display: flex;
    justify-content: center;
  `;
  return <Centred>{props.children}</Centred>;
}
