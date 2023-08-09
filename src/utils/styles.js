import cn from "./cn";

function headerStyle(text) {
  const base = `text-xs font-ubuntu mb-3.5 ${
    text == "&:hover" || text == "&:focus" ? "text-gunmetal" : "text-dark-grey"
  }`;

  return cn(base, text);
}

function inputStyle(placeholder, { color, size }) {
  const base = `${
    size ? size : "p-[18px]"
  } outline-none border rounded-lg placeholder:font-noto placeholder:text-sm placeholder:font-medium ${
    placeholder != "Placeholder"
      ? "placeholder:text-dark-grey"
      : "placeholder:text-gunmetal"
  }`;

  const variants = {
    color: {
      primary: "border-gunmetal",
      second: "border-red-600",
      hover: "hover:border-dark-grey hover:duration-150",
      firstFocus: "focus:border-bright-blue",
      secondFocus: "focus:border-red-600",
      callIcon: "bg-call bg-no-repeat bg-left pl-[40px]",
      lockIcon: "bg-lock bg-no-repeat bg-right pr-[40px]",
    },
    size: {
      sm: "p-[10px]",
      fullsize: "w-full p-[18px]",
    },
  };
  return cn(base, placeholder, variants.color[color], variants.size[size]);
}

function labelStyle({ label, labeltxt }) {
  const base = `font-noto mb-1 ${label ? label : "text-dark-grey"} ${
    labeltxt ? "text-[10px]" : "text-xs"
  }`;

  const colors = {
    primary: "text-bright-blue",
    second: "text-red-600",
  };

  return cn(base, colors[label]);
}

function parentInput({ widthFull }) {
  const base = `flex flex-col items-start ${widthFull ? widthFull : ""}`.trim();

  return cn(base);
}

headerStyle.inputStyle = inputStyle;
headerStyle.labelStyle = labelStyle;
headerStyle.parentInput = parentInput;

export default headerStyle;
