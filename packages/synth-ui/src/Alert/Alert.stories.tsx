import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "COMPONENTS / Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const Index: ComponentStoryObj<typeof Alert> = {
  args: {
  },
};
