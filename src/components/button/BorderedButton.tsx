import React from "react";
import "./borderedButton.scss";

const BorderedButton = (props: {
  iconSrc: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <button
      {...props.buttonProps}
      className={`bordered-button ${props.buttonProps?.className || ""}`}
    >
      <img src={props.iconSrc} />
    </button>
  );
};

export default BorderedButton;
