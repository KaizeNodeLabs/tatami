"use client";

import Image from "next/image";
import Link from "next/link";
import NavbarToggle from "./NavbarToggle";

export default function Navbar({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-black">
      <div>
        <Image
          src={
            darkMode
              ? "/Primary Logo_Primary Color.svg"
              : "/Primary Logo_Secondary Color.svg"
          }
          alt="Tatami Logo"
          width={80}
          height={35}
        />
      </div>

      <div className="flex items-center space-x-6 ml-auto">
        {/* ✅ Reemplazamos <a> por Link de Next.js */}
        <ul className="hidden md:flex space-x-6 text-gray-900 dark:text-white">
          <li>
            <Link
              href="/docs"
              className="cursor-pointer hover:text-primary transition-colors"
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="cursor-pointer hover:text-primary transition-colors"
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              href="/build"
              className="cursor-pointer hover:text-primary transition-colors"
            >
              Let's build
            </Link>
          </li>
        </ul>

        <NavbarToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
}
