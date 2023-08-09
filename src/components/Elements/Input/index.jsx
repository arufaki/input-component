import headerStyle from "../../../utils/styles";
import Input from "./input";
import Label from "./label";

function Inputs({
  id,
  placeholder,
  text,
  color,
  size,
  label,
  caption,
  labeltxt,
  widthFull,
  rows,
  ...props
}) {
  const { Heading } = Label;
  const { parentInput } = headerStyle;
  return (
    <div className={parentInput({ widthFull })}>
      <Heading text={text} />
      <Label htmlFor={id} label={label} labeltxt={labeltxt} />
      <Input
        id={id}
        placeholder={placeholder ? placeholder : "Placeholder"}
        color={color}
        size={size}
        rows={rows}
        {...props}
      />
      {caption}
    </div>
  );
}

export default Inputs;
