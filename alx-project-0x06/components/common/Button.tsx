import { ButtonProps } from "@/interface";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonSize,
  buttonBackgroundColor,
  action,
}) => {
  const backgroundColorClass = buttonBackgroundColor
    ? {
        red: "bg-red-500",
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        green: "bg-green-500",
      }[buttonBackgroundColor]
    : "bg-slate-500";

  return (
    <button
      onClick={action}
      className={`${backgroundColorClass} ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg hover:${backgroundColorClass}/50 transition duration-300 text-white`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
