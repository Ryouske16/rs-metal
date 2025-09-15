import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
      <Image
        src="/logo.png"
        alt="RS Metal logo"
        width={160}
        height={40}
        priority
        className="w-auto h-auto object-contain translate-y-3" 
      />
  );
}
