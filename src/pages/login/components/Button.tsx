import clsx from "clsx";

interface Buttons {
  size?: "sm" | "md" | "lg";
  children: string;
  onClick?: (e: React.MouseEvent) => void
}

export default function Button({ size = "lg", children, onClick }: Buttons) {
  
  
  return (
    <button
      onClick={onClick}
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
