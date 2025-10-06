"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.png" // ✅ Replace with your actual file path
        alt="RS Metal Logo"
        width={200}  // increased width
        height={90}  // proportional height
        priority
        className="object-contain w-36 md:w-44 lg:w-52 mt-6"
      />
    </div>
  );
}
