import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { OrderForm } from "@/components/site/OrderForm";

const title = "Commander ton portfolio — Portfolio For U";
const description =
  "Remplis le formulaire en 4 étapes (contact, parcours, projets, fichiers) et reçois un aperçu gratuit de ton portfolio sous 24/48h.";

export const Route = createFileRoute("/commander")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/commander" }],
  }),
  component: CommanderPage,
});

function CommanderPage() {
  return (
    <Layout>
      <PageHero
        title={
          <>
            Lance ta <span className="text-primary">commande</span>
          </>
        }
        subtitle="Quatre étapes rapides, aucun paiement avant validation de l'aperçu."
      />
      <OrderForm />
    </Layout>
  );
}

