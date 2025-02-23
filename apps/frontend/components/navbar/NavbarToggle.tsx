import Image from "next/image";

export default function NavbarToggle({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <button type="button" onClick={toggleDarkMode} className="p-2 rounded">
      <Image
        src="/brightness_6.svg"
        alt="Toggle Dark Mode"
        width={30}
        height={30}
      />
    </button>
  );
}
