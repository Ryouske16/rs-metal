export default function Button({
  children,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        px-5 py-3 rounded-xl font-semibold text-black
        bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600
        transition-all duration-300
        hover:from-orange-500 hover:via-orange-500 hover:to-orange-600
      "
    >
      {children}
    </button>
  );
}