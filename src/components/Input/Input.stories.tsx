import { InputProps } from "@mui/base";
import React from "react";
import Input from "./Input";
import { Meta, StoryObj } from "@storybook/react";
//1
// export default {
//   title: "Form/Input",
//   component: Input,
// };
// export const Small = () => <Input size="small" label="small" value={2}></Input>;
// export const Medium = () => <Input size="medium" label="medium"></Input>;
// export const Large = () => <Input size="large" label="large"></Input>;

//2
const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
  argTypes: {
    size: { table: { disable: true } },
    // width: { control: { type: "text" } },
  },
};
export default meta;
type CustomInput = StoryObj<typeof Input>;
export const Small: CustomInput = {
  args: {
    size: "small",
    label: "small",
    value: "1",
  },
};
export const Medium: CustomInput = {
  args: {
    size: "medium",
    label: "medium",
    value: "1",
  },
};
export const Large: CustomInput = {
  args: {
    size: "large",
    label: "large",
    value: "1",
  },
};
