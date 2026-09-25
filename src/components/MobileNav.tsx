import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>
      {open ? (
        <nav
          id={panelId}
          className="absolute left-0 right-0 top-full border-b border-[var(--color-border)] bg-[var(--color-background)]/95 p-4 backdrop-blur-md"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-[var(--color-card)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
