import Link from "next/link";

export const FooterBottom = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div
      className={`border-t pt-6 flex flex-col md:flex-row justify-between items-center transition-colors duration-300 ${
        darkMode ? "border-white/40 text-white" : "border-gray-300 text-black"
      }`}
    >
      <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
        <Link
          href="/privacy-policy"
          className={`text-lg hover:text-primary transition-colors ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Privacy Policy
        </Link>
        <span className={darkMode ? "text-white/40" : "text-gray-500"}>|</span>
        <Link
          href="/terms"
          className={`text-lg hover:text-primary transition-colors ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Terms of Service
        </Link>
      </div>
      <div className={darkMode ? "text-white" : "text-black"}>
        <Link href="https://github.com/KaizeNodeLabs">
          2025 <span className="font-semibold">Kaizenode Labs</span>
        </Link>
      </div>
    </div>
  );
};
