import Link from "next/link"
import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  type?: "button" | "reset" | "submit"
  variant?: "primary" | "ghost"
}

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary"
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-black font-semibold"
      : "bg-white/5 border border-white/10 text-white"

  if (href) {
    return (
      <Link
        href={href}
        className={`px-5 py-3 rounded-xl hover:opacity-90 transition ${styles}`}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-5 py-3 rounded-xl hover:opacity-90 transition ${styles}`}
    >
      {children}
    </button>
  )
}
