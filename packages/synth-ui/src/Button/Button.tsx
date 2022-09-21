type Props = {
  style?: React.CSSProperties;
  className?: string;
};

const styles: React.CSSProperties = {};

const Button: React.FC<Props> = (props) => {
  return <button className={props.className} style={props.style}></button>;
};

export default Button;
