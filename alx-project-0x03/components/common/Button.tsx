
import React from "react";
import { ButtonProps } from "@/interface";

const Button: React.FC<ButtonProps> = ({
  action,
  buttonLabel,
  buttonBackgroundColor,
}) => {
  const bgColor =
    buttonBackgroundColor === "blue"
      ? "bg-blue-500"
      : buttonBackgroundColor === "green"
      ? "bg-green-500"
      : "bg-orange-500";

  return (
    <button
      onClick={action}
      className={`${bgColor} text-white px-6 py-2 rounded-lg hover:opacity-90 transition`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
