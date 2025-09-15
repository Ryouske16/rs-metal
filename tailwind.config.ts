import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        metal: { 50:"#f8fafc",100:"#f1f5f9",700:"#2b2b2f",800:"#1f1f22",900:"#0f0f10" },
        accent: "#f59e0b",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 8px 30px rgba(0,0,0,.3)",
      },
      backgroundImage: {
        "metal-sheen":
          "radial-gradient(1200px 400px at 50% -10%, rgba(255,255,255,.08), transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
