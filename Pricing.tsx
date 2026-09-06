import { Link } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";

const plans = [
  {
    name: "Express — Fichiers Seuls",
    price: "20€",
    tag: "// LIVRAISON ZIP",
    desc: "Le code source de ton portfolio, prêt à héberger toi-même.",
    features: [
      "Portfolio basé sur un template existant",
      "Archive ZIP du code source",
      "Personnalisation textes & couleurs",
      "Sans mise en ligne",
    ],
    popular: false,
  },
  {
    name: "Express — Clé en Main",
    price: "30€",
    tag: "// ZIP + MISE EN LIGNE",
    desc: "Même base, mais je m'occupe de tout mettre en ligne pour toi.",
    features: [
      "Tout de l'offre Fichiers Seuls",
      "Mise en ligne GitHub Pages",
      "Configuration nom de domaine perso",
      "Site accessible immédiatement",
    ],
    popular: false,
  },
  {
    name: "Sur-Mesure — Clé en Main",
    price: "55€",
    tag: "// DESIGN UNIQUE",
    desc: "Un site développé de A à Z autour de ton parcours, sans risque.",
    features: [
      "Aperçu gratuit sous 24/48h",
      "Révisions illimitées",
      "Tu paies seulement après validation",
      "Déploiement complet inclus",
    ],
    popular: true,
  },
];

const comparison = [
  { label: "Code source livré (ZIP)", values: [true, true, true] },
  { label: "Design 100% personnalisé", values: [false, false, true] },
  { label: "Mise en ligne GitHub Pages", values: [false, true, true] },
  { label: "Nom de domaine configuré", values: [false, true, true] },
  { label: "Aperçu gratuit 24/48h", values: [false, false, true] },
  { label: "Révisions illimitées", values: [false, false, true] },
  { label: "Paiement après validation", values: [false, false, true] },
];

export function Pricing() {
  return (
    <section id="tarifs" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <p className="mono-label text-primary">// TARIFS SIMPLES ET TRANSPARENTS</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Choisis la formule qui te correspond
      </h2>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <article
            key={p.name}
            className={`surface-card flex flex-col p-6 ${p.popular ? "glow-primary" : ""}`}
          >
            {p.popular && (
              <span className="mb-4 w-fit rounded-full border border-primary/50 bg-primary/10 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-primary">
                POPULAIRE
              </span>
            )}
            <p className="mono-label">{p.tag}</p>
            <h3 className="mt-2 text-xl font-bold">{p.name}</h3>
            <p className="mt-4 text-4xl font-extrabold tracking-tight">{p.price}</p>
            <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="min-w-0 text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/commander"
              className={`mt-7 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                p.popular
                  ? "bg-[image:var(--gradient-primary)] text-primary-foreground glow-primary"
                  : "border border-border bg-secondary text-foreground hover:border-primary/50"
              }`}
            >
              Commander cette formule
            </Link>
          </article>
        ))}
      </div>

      <div className="surface-card mt-12 overflow-x-auto p-0 hover:translate-y-0">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="p-4 text-left font-mono text-xs tracking-wider text-muted-foreground uppercase">
                Comparatif
              </th>
              {plans.map((p) => (
                <th key={p.name} className="p-4 text-center text-sm font-semibold">
                  {p.price}
                  <span className="mono-label block normal-case">{p.name}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr key={row.label} className="border-b border-border last:border-0">
                <td className="p-4 text-muted-foreground">{row.label}</td>
                {row.values.map((v, i) => (
                  <td key={i} className="p-4 text-center">
                    {v ? (
                      <Check className="mx-auto size-4 text-primary" />
                    ) : (
                      <Minus className="mx-auto size-4 text-muted-foreground/50" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
