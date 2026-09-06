import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

const title = "Portfolio For U — Portfolio sur-mesure pour étudiants tech";
const description =
  "Portfolio web personnalisé développé de A à Z par Nathan Cattin pour étudiants tech et professionnels IT. Aperçu gratuit sous 24/48h, à partir de 20€.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Portfolio For U",
          serviceType: "Création de portfolio web sur-mesure",
          provider: { "@type": "Person", name: "Nathan Cattin" },
          areaServed: "FR",
          offers: [
            { "@type": "Offer", name: "Express — Fichiers Seuls", price: "20", priceCurrency: "EUR" },
            { "@type": "Offer", name: "Express — Clé en Main", price: "30", priceCurrency: "EUR" },
            { "@type": "Offer", name: "Sur-Mesure — Clé en Main", price: "55", priceCurrency: "EUR" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const highlights = [
  {
    step: "01",
    title: "Tu partages ton parcours",
    text: "Bio, diplômes, expériences, projets et préférences visuelles via un formulaire guidé.",
  },
  {
    step: "02",
    title: "Je développe ton site",
    text: "Code propre, responsive et rapide, pensé pour les recruteurs du secteur tech.",
  },
  {
    step: "03",
    title: "Tu valides, puis tu paies",
    text: "Aperçu gratuit sous 24/48h, révisions illimitées avant toute mise en ligne.",
  },
];

function Hero() {
  return (
    <section className="grid-bg border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-[11px] tracking-widest text-primary glow-primary">
          ● SÉCURISÉ &amp; SUR-MESURE
        </span>
        <h1 className="mx-auto mt-7 max-w-4xl text-4xl leading-tight font-extrabold tracking-tight sm:text-6xl">
          Un Portfolio Sur-Mesure Pour{" "}
          <span className="text-primary">Mettre En Avant</span> Ton Parcours
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Conçu par Nathan Cattin. Tu me donnes tes infos, ton parcours et tes projets, et je
          développe ton site personnalisé de A à Z.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/commander"
            className="w-full rounded-lg bg-[image:var(--gradient-primary)] px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 glow-primary sm:w-auto"
          >
            Discuter de ton projet →
          </Link>
          <Link
            to="/demos"
            className="w-full rounded-lg border border-border bg-secondary px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary/50 sm:w-auto"
          >
            Voir les démos
          </Link>
        </div>
        <p className="mono-label mt-8">
          Aperçu gratuit 24/48h · Révisions illimitées · Paiement après validation
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <p className="mono-label text-primary">// COMMENT ÇA MARCHE</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Trois étapes, zéro prise de risque
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {highlights.map((h) => (
          <article key={h.step} className="surface-card p-6">
            <span className="font-mono text-xs text-primary">{h.step}</span>
            <h3 className="mt-3 text-lg font-bold">{h.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/tarifs"
          className="rounded-lg border border-border bg-secondary px-6 py-3 text-center text-sm font-semibold transition-colors hover:border-primary/50"
        >
          Voir les tarifs
        </Link>
        <Link
          to="/commander"
          className="rounded-lg bg-[image:var(--gradient-primary)] px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 glow-primary"
        >
          Commander mon portfolio
        </Link>
      </div>
    </section>
  );
}

function Index() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
    </Layout>
  );
}

