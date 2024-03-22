import { ButtonProps } from "./types";

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-purple-600 px-3 py-2 rounded-md text-white hover:bg-purple-700 transition-colors ease-in-out duration-300"
    >
      {children}
    </button>
  );
}

export default Button;
