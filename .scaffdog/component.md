---
name: "component"
root: "packages/synth-ui"
output: "**/*"
ignore: []
questions:
  name: "コンポーネントの名前を入力してください"
---

# `src/index.tsx`

```tsx
{{ read output.abs }}
export { default as {{ inputs.name }} } from "./{{ inputs.name }}/{{ inputs.name }}";
```

# `src/{{ inputs.name }}/{{ inputs.name }}.tsx`

```tsx
type Props = {
  style?: React.CSSProperties;
  className?: string;
};

const styles: React.CSSProperties = {}

const {{ inputs.name }}: React.FC<Props> = (props) => {
  return (
    <div className={props.className} style={props.style}></div>
  )
}

export default {{ inputs.name }};

```

# `src/{{ inputs.name }}/{{ inputs.name }}.stories.tsx`

```tsx
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import {{ inputs.name }} from "./{{ inputs.name }}";

export default {
  title: "COMPONENTS / {{ inputs.name }}",
  component: {{ inputs.name }},
} as ComponentMeta<typeof {{ inputs.name }}>;

export const Index: ComponentStoryObj<typeof {{ inputs.name }}> = {
  args: {
  },
};

```
