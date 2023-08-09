import headerStyle from "../../../utils/styles";

function Label({ htmlFor, label, labeltxt, ...props }) {
  const { labelStyle } = headerStyle;
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className={labelStyle({ label, labeltxt })}
    >
      {labeltxt ? labeltxt : "Label"}
    </label>
  );
}

function Heading({ text }) {
  return <h6 className={headerStyle(text)}>{text}</h6>;
}

Label.Heading = Heading;

export default Label;
