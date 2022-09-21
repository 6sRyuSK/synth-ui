type Props = {
  style?: React.CSSProperties;
  className?: string;
};

const styles: React.CSSProperties = {}

const Alert: React.FC<Props> = (props) => {
  return (
    <div className={props.className} style={props.style}></div>
  )
}

export default Alert;
