import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, TerminalSquare } from "lucide-react";

const links = [
  { label: "Accueil", to: "/" },
  { label: "Tarifs", to: "/tarifs" },
  { label: "Démos", to: "/demos" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-secondary text-primary">
            <TerminalSquare className="size-5" />
          </span>
          <span className="truncate text-lg font-extrabold tracking-tight">
            Portfolio<span className="text-primary">ForU</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/commander"
            className="rounded-lg bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 glow-primary"
          >
            Commander
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 shrink-0 place-items-center rounded-lg border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/commander"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-[image:var(--gradient-primary)] px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Commander
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

