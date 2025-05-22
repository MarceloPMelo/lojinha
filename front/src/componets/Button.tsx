

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export function Button({ label, onClick, type = "button", className = "" }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={`px-4 py-2 bg-blue-600 text-white rounded ${className}`}>
      {label}
    </button>
  );
}
export default Button;