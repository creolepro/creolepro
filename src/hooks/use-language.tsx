import { useState } from "react";

export function useLanguage() {
  const [language, setLanguage] = useState<"en" | "ht">("en");

  return { language, setLanguage };
}
