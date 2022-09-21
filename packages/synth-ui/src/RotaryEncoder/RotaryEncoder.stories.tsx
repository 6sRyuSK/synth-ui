import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import RotaryEncoder from "./RotaryEncoder";

export default {
  title: "COMPONENTS / RotaryEncoder",
  component: RotaryEncoder,
} as ComponentMeta<typeof RotaryEncoder>;

export const Index: ComponentStoryObj<typeof RotaryEncoder> = {
  args: {
    label: "LFO",
    wheelEvent: (value) => console.log(value),
  },
};
