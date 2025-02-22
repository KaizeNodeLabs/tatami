import { Button } from "@/components/ui/button";
import WhyChooseTatami from "../components/ui/WhyChooseTatami";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to Tatami</h1>
      <Link href="/app">
        <Button>Go to App</Button>
      </Link>

      {/*Seccion WhyTatami  */}
      <div className="mt-12 w-full">
        <WhyChooseTatami />
      </div>
    </div>
  );
}
