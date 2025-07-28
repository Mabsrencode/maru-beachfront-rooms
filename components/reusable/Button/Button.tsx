import React, { ReactNode } from "react";

const Button = ({
  children,
  style,
  type = "button",
  disabled,
}: {
  children?: ReactNode;
  style?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${style} disabled:bg-primary disabled:cursor-not-allowed hover:disabled:cursor-not-allowed bg-primary-light px-4 py-2 rounded hover:bg-primary cursor-pointer transition-all`}
    >
      {children}
    </button>
  );
};

export default Button;
