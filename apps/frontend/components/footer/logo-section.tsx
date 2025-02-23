import Image from "next/image";
import Link from "next/link";

export const LogoSection = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div>
      <Link href="/" className="inline-block mb-4">
        <Image
          src={
            darkMode
              ? "/Primary Logo_Primary Color.svg"
              : "/Primary Logo_Secondary Color.svg"
          }
          alt="Tatami Logo"
          width={0}
          height={0}
          className="h-20 w-auto"
        />
      </Link>
      <p
        className={`block text-lg transition-colors ${darkMode ? "text-white" : "text-black"}`}
      >
        Conquer the Dojo
      </p>
    </div>
  );
};
