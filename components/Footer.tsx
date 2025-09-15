export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="text-center text-xs text-gray-500 py-8">
        © {new Date().getFullYear()} RS Metal. All rights reserved.
      </div>
    </footer>
  );
}
