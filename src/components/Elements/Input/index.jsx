import headerStyle from "../../../utils/styles";
import Label from "./Label";
import Input from "./Input";

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
