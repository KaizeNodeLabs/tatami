import { NewsletterForm } from "@/components/footer/newsletter-form";

export const SubscribeSection = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div>
      <h3
        className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-black"}`}
      >
        Subscribe to news of Tatami
      </h3>
      <NewsletterForm darkMode={darkMode} />
    </div>
  );
};
