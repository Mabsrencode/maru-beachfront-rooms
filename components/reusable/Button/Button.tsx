import React, { ReactNode } from "react";

const Button = ({
  children,
  style,
}: {
  children?: ReactNode;
  style?: string;
}) => {
  return (
    <button
      className={`${style} bg-primary-light px-4 py-2 rounded hover:bg-primary cursor-pointer transition-all`}
    >
      {children}
    </button>
  );
};

export default Button;
