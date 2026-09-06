import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Pricing } from "@/components/site/Pricing";

const title = "Tarifs — Portfolio For U";
const description =
  "Trois formules pour ton portfolio : Express Fichiers Seuls à 20€, Express Clé en Main à 30€ et Sur-Mesure Clé en Main à 55€ avec aperçu gratuit.";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tarifs" }],
  }),
  component: TarifsPage,
});

function TarifsPage() {
  return (
    <Layout>
      <PageHero
        title={
          <>
            Des tarifs <span className="text-primary">clairs</span>, sans surprise
          </>
        }
        subtitle="Du simple fichier livré au site entièrement conçu et mis en ligne : tu choisis le niveau d'accompagnement."
      />
      <Pricing />
    </Layout>
  );
}

    

