import { RotaryEncoder } from "@6sryusk/synth-ui";

function HomePage() {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <RotaryEncoder label="a" wheelEvent={(value) => console.log(value)} />
    </>
  );
}

export default HomePage;
