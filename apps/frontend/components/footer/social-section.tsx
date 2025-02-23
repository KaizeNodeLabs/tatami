import Link from "next/link";

export const SocialSection = ({ darkMode }: { darkMode: boolean }) => {
  const socials = [
    {
      id: "github-id",
      url: "https://github.com/KaizeNodeLabs/Tatami",
      iconSVG: (
        <svg
          className="w-7 h-7 text-gray-900 dark:text-white transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: "twitter-id",
      url: "https://x.com/TatamiDev",
      iconSVG: (
        <svg
          className="w-7 h-7 text-gray-900 dark:text-white transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      id: "telegram-id",
      url: "https://t.me/+e0d3hYFhXO0zMThh",
      iconSVG: (
        <svg
          className="w-7 h-7 text-gray-900 dark:text-white transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.03-1.97 1.25-5.57 3.67-.53.36-1.01.54-1.44.53-.47-.01-1.38-.26-2.06-.48-.83-.27-1.49-.42-1.43-.89.03-.25.39-.51 1.08-.78 4.24-1.84 7.07-3.06 8.48-3.65 4.04-1.69 4.88-1.99 5.42-2 .12 0 .39.03.57.18.17.14.21.33.24.48.02.12.02.24.02.36z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <h3
        className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-black"}`}
      >
        Social
      </h3>
      <div className="flex space-x-6">
        {socials.map((social) => {
          return (
            <Link
              key={social.id}
              href={social.url}
              className="transition-colors"
            >
              {social.iconSVG}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
