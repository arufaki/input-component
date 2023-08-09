import headerStyle from "../../../utils/styles";

function Input({ placeholder, color, size, rows, ...props }) {
  const { inputStyle } = headerStyle;
  return (
    <>
      {rows ? (
        <textarea
          placeholder={placeholder}
          rows={rows}
          className={inputStyle(placeholder, { color, size })}
        />
      ) : (
        <input
          placeholder={placeholder}
          className={inputStyle(placeholder, { color, size })}
          {...props}
        />
      )}
    </>
  );
}

export default Input;
