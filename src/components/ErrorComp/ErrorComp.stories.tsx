import React from "react";
import ErrorComp from "./ErrorComp";

export default {
  title: "Form/ErrorComp",
  component: ErrorComp,
};
export const HtError = () => <ErrorComp measure="Height"></ErrorComp>;
export const WtError = () => <ErrorComp measure="Weight"></ErrorComp>;
