import Label from "../components/Elements/Input/label";

const inputConfig = [
  {
    id: 1,
    inputs: [
      {
        id: "input",
        text: "<Input/>",
        type: "text",
      },
      {
        id: "input-hover",
        text: "&:hover",
        type: "text",
        color: "hover",
      },
      {
        id: "input-focus",
        text: "&:focus",
        type: "text",
        color: "firstFocus",
        label: "primary",
      },
    ],
  },
  {
    id: 2,
    inputs: [
      {
        id: "error",
        text: "<Input error />",
        type: "text",
        color: "second",
        label: "second",
      },
      {
        id: "error-hover",
        text: "&:hover",
        type: "text",
        color: "hover",
      },
      {
        id: "error-focus",
        text: "&:focus",
        type: "text",
        color: "secondFocus",
        label: "second",
      },
    ],
  },
  {
    id: 3,
    inputs: [
      {
        id: "disabled",
        text: "<Input disabled />",
        type: "text",
        disabled: "disabled",
      },
    ],
  },
  {
    id: 4,
    inputs: [
      {
        id: "helperText",
        text: "<Input helperText=”Some interesting text” />",
        type: "text",
        caption: <Label labeltxt="Some interesting text" />,
      },
      {
        id: "helperText-error",
        text: "<Input helperText=”Some interesting text” error />",
        type: "text",
        caption: <Label labeltxt="Some interesting text" label="second" />,
        label: "second",
        color: "second",
      },
    ],
  },
  {
    id: 5,
    inputs: [
      {
        id: "start-icon",
        text: "<Input startIcon />",
        type: "text",
        color: "callIcon",
      },
      {
        id: "end-icon",
        text: "<Input startIcon />",
        type: "text",
        color: "lockIcon",
      },
    ],
  },
  {
    id: 6,
    inputs: [
      {
        id: "input-value",
        text: "<Input value=”text” />",
        type: "text",
        defaultValue: "Text",
      },
    ],
  },
  {
    id: 7,
    inputs: [
      {
        id: "input-sm",
        text: "<Input size=”sm” />",
        type: "text",
        size: "sm",
      },
      {
        id: "input-md",
        text: "<Input size=”md” />",
        type: "text",
      },
    ],
  },
  {
    id: 8,
    inputs: [
      {
        id: "input-fullwidth",
        text: "<Input fullWidth />",
        type: "text",
        size: "fullsize",
        defaultValue: "Text",
        widthFull: "w-full",
      },
    ],
  },
  {
    id: 9,
    inputs: [
      {
        id: "input-multiline",
        text: "<Input multiline row=”4” />",
        type: "text",
        rows: "4",
      },
    ],
  },
];

export default inputConfig;
