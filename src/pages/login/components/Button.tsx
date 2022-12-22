import clsx from "clsx";
import { useNavigate } from "react-router-dom";

interface Buttons {
  size?: "sm" | "md" | "lg";
  children: string;
}

export default function Button({ size = "lg", children }: Buttons) {
  const navigate = useNavigate();

  const dashboardClick = () => {
    navigate('/dashboard')
  }
  
  return (
    <button
      onClick={dashboardClick}
      className={clsx(
        "text-white bg-hoverBlue py-2 px-2 rounded-lg font-semibold w-full font-sans  hover:bg-orange",
        {
          "text-xs": size == "sm",
          "text-sm": size == "md",
          "text-md": size == "lg",
        }
      )}
    >
      {children}
    </button>
  );
}
