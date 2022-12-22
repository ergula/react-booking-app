import clsx from "clsx";

interface Buttons {
  size?: "sm" | "md" | "lg";
  children: string;
}

export default function Button({ size = "lg", children }: Buttons) {
  return (
    <button
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
