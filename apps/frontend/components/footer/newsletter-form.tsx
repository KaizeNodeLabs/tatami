"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type FormEvent, useState } from "react";

export const NewsletterForm = ({ darkMode }: { darkMode: boolean }) => {
  const [email, setEmail] = useState("");

  return (
    <form className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`border-2 p-2 ${
            darkMode
              ? "bg-gray-900 text-white border-white"
              : "bg-white text-black border-gray-500"
          }`}
        />
        <Button className="bg-primary text-black hover:bg-primary/90 px-6 text-sm rounded-full">
          Subscribe
        </Button>
      </div>
    </form>
  );
};
