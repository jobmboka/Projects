export default function Button({ children, type = "button", variant = "primary", ...props }) {
  const base = "px-6 py-3 rounded-lg font-semibold transition-colors duration-200";
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    outline: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
  };
  return (
    <button type={type} className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
