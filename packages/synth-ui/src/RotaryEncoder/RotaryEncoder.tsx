import { useEffect, useState } from "react";

type Props = {
  size?: number;
  limit?: [number, number];
  label: string;
  wheelEvent: (value: number) => any;
  style?: React.CSSProperties;
  className?: string;
};

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    width: "fit-content",
  },
  rotaryEncoder: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#444",
    borderRadius: "50%",
    margin: "0 auto",
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: "#fefefe",
    borderRadius: "50%",
    marginTop: 4,
  },
};

const RotaryEncoder: React.FC<Props> = (props: Props) => {
  const [rotate, setRotate] = useState<number>(props.limit![0]);

  return (
    <div
      className={props.className}
      style={{ ...styles.wrapper, ...props.style }}
    >
      <div
        style={{
          ...styles.rotaryEncoder,
          width: props.size,
          height: props.size,
          transform: `rotate(${rotate}deg)`,
        }}
        id={props.label}
        onWheel={(e) => {
          setRotate(
            Math.min(
              Math.max(props.limit![0], rotate + Math.sign(e.deltaY) * 10),
              props.limit![1]
            )
          );
          props.wheelEvent(rotate - props.limit![0]);
        }}
      >
        <div style={styles.dot}></div>
      </div>
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  );
};

RotaryEncoder.defaultProps = {
  size: 32,
  limit: [-140, 140],
};

export default RotaryEncoder;
