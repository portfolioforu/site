import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2">
        <div>
          <p className="text-lg font-extrabold">
            Portfolio<span className="text-primary">ForU</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Portfolios sur-mesure pour étudiants tech et professionnels de l'IT.
            Conçu et développé par Nathan Cattin.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <Link to="/tarifs" className="text-sm text-muted-foreground hover:text-foreground">
            Tarifs
          </Link>
          <Link to="/demos" className="text-sm text-muted-foreground hover:text-foreground">
            Démos
          </Link>
          <Link to="/commander" className="text-sm text-muted-foreground hover:text-foreground">
            Commander
          </Link>
          <p className="mono-label mt-3">© {new Date().getFullYear()} portfolio-for-u.fr</p>
        </div>
      </div>
    </footer>
  );
}

