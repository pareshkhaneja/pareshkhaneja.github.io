import { Moon, Sun } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

/** Visual-only toggle — portfolio theme is fixed to match the approved mock. */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="border-slate-600/50 bg-transparent text-slate-200 hover:bg-white/5"
      onClick={() => setDark((value) => !value)}
      aria-label={dark ? "Theme preview: light" : "Theme preview: dark"}
      aria-pressed={dark}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
