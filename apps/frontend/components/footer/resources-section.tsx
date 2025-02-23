import Link from "next/link";

export const ResourcesSection = ({ darkMode }: { darkMode: boolean }) => {
  const resources = [
    { id: "docs-id", label: "Docs", url: "#" },
    { id: "start-building-id", label: "Start Building", url: "#" },
  ];

  return (
    <div>
      {/* ✅ Título ahora cambia correctamente entre Light/Dark Mode */}
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Resources
      </h3>

      {/* ✅ Enlaces ahora son visibles en ambos temas */}
      <div className="flex flex-col space-y-2">
        {resources.map((resource) => {
          return (
            <Link
              key={resource.id}
              href={resource.url}
              className="text-gray-900 dark:text-white hover:text-primary transition-colors text-lg"
            >
              {resource.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
