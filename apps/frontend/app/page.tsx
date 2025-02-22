import { Button } from "@/components/ui/button";
import Link from "next/link";
import PartnersSection from "@/components/AlignedWith/AligendWith";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to Tatami</h1>
      <PartnersSection/>
    </div>
  );
}
