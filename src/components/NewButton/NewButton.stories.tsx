import React from "react";
import NewButton from "./NewButton";
import Center from "../Center/Center";
import { Meta, StoryObj } from "@storybook/react";
import { action, actions } from "@storybook/addon-actions";
// 1)
// export default {
//   title: "Form/Button",
//   component: NewButton,
//   decorators: [(story: any) => <Center>{story()}</Center>],
//   // LOCAL DECORATOR
//   // GLOBAL DECORATOR in ./.storybook/preview.tsx
// };
// export const Primary = () => (
//   // <Center>
//   <NewButton variant="primary" onClick={action("Click Handler")}>
//     Primary
//   </NewButton>
//   // </Center>
// );
// export const Secondary = () => (
//   <NewButton variant="secondary" onClick={action("Click Handler")}>
//     Secondary
//   </NewButton>
// );
// export const Success = () => (
//   <NewButton variant="success" onClick={action("Click Handler")}>
//     Success
//   </NewButton>
// );
// export const Error = () => (
//   <NewButton variant="error" onClick={action("Click Handler")}>
//     Error
//   </NewButton>
// );

const meta: Meta<typeof NewButton> = {
  title: "Form/Button",
  component: NewButton,
  decorators: [(story: any) => <Center>{story()}</Center>],
  argTypes: {
    variant: { table: { disable: true } },
  },
};
export default meta;
type CustomButton = StoryObj<typeof NewButton>;
export const Primary: CustomButton = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: CustomButton = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Success: CustomButton = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Error: CustomButton = {
  args: {
    variant: "error",
    children: "Error",
  },
};
