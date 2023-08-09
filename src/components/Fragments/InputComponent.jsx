import Inputs from "../Elements/Input";
import inputConfig from "../../utils/inputConfig";

function InputComponent() {
  return (
    <>
      {inputConfig.map(({ id, inputs }) => (
        <div
          className="input-master flex flex-row items-start mt-11 flex-wrap"
          key={id}
        >
          {inputs.map(
            ({
              id,
              text,
              type,
              color,
              size,
              label,
              disabled,
              caption,
              defaultValue,
              widthFull,
              rows,
            }) => (
              <Inputs
                key={id}
                id={id}
                text={text}
                type={type}
                color={color}
                size={size}
                label={label}
                disabled={disabled}
                caption={caption}
                defaultValue={defaultValue}
                widthFull={widthFull}
                rows={rows}
              />
            )
          )}
        </div>
      ))}
    </>
  );
}

export default InputComponent;
