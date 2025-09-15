set -euo pipefail

# === CREATE FOLDER STRUCTURE ===
mkdir -p "app/(sections)" app/api/contact components lib public

# === APP CORE FILES ===
cat > app/globals.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

cat > app/layout.tsx <<'EOF'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RS Metal",
  description: "Metal fabrication company website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
EOF

cat > app/page.tsx <<'EOF'
import Hero from "./(sections)/Hero";
import Services from "./(sections)/Services";
import Capabilities from "./(sections)/Capabilities";
import Process from "./(sections)/Process";
import Gallery from "./(sections)/Gallery";
import ContactCTA from "./(sections)/ContactCTA";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Capabilities />
      <Process />
      <Gallery />
      <ContactCTA />
    </>
  );
}
EOF

cat > app/sitemap.ts <<'EOF'
export default function sitemap(){
  return [{ url:"https://example.com", lastModified: new Date() }];
}
EOF

cat > app/robots.ts <<'EOF'
export default function robots(){
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://example.com/sitemap.xml" };
}
EOF

# === API ROUTE ===
mkdir -p app/api/contact
cat > app/api/contact/route.ts <<'EOF'
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  console.log("Contact form:", Object.fromEntries(form.entries()));
  return NextResponse.json({ ok: true });
}
EOF

# === SECTIONS ===
for f in Hero Services Capabilities Process Gallery ContactCTA; do
  cat > "app/(sections)/$f.tsx" <<EOF
export default function $f() {
  return (
    <section className="p-10 border-b border-gray-700">
      <h2 className="text-2xl font-bold">$f Section</h2>
      <p className="text-gray-400">Placeholder for $f content.</p>
    </section>
  );
}
EOF
done

# === COMPONENTS ===
cat > components/Header.tsx <<'EOF'
export default function Header() {
  return <header className="p-4 border-b border-gray-700">Header</header>;
}
EOF

cat > components/Footer.tsx <<'EOF'
export default function Footer() {
  return <footer className="p-4 border-t border-gray-700">Footer</footer>;
}
EOF

cat > components/Container.tsx <<'EOF'
export default function Container({children}:{children:React.ReactNode}) {
  return <div className="max-w-6xl mx-auto px-4">{children}</div>;
}
EOF

cat > components/Button.tsx <<'EOF'
export default function Button({children}:{children:React.ReactNode}) {
  return <button className="px-4 py-2 bg-blue-600 text-white rounded">{children}</button>;
}
EOF

cat > components/Logo.tsx <<'EOF'
export default function Logo() {
  return <span className="font-bold text-xl">RS Metal</span>;
}
EOF

# === LIB ===
cat > lib/site.ts <<'EOF'
export const site = {
  name: "RS Metal",
  description: "Precision metal fabrication",
  phone: "+44 7000 000000",
  email: "info@example.com",
  address: "London, UK"
};
EOF

# === CONFIG FILES ===
cat > tailwind.config.ts <<'EOF'
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: { extend: {} },
  plugins: [],
};
export default config;
EOF

cat > postcss.config.js <<'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "types": ["node"]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
EOF

# === PLACEHOLDER PUBLIC FILES ===
: > public/logo.png
: > public/hero-texture.svg
: > app/favicon.ico
