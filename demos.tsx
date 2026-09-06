import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Demos } from "@/components/site/Demos";

const title = "Démos interactives — Portfolio For U";
const description =
  "Teste en direct deux portfolios réalisés : un format single-page épuré et un format multi-pages avec pages projets dédiées.";

export const Route = createFileRoute("/demos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/demos" }],
  }),
  component: DemosPage,
});

function DemosPage() {
  return (
    <Layout>
      <PageHero
        title={
          <>
            Des <span className="text-primary">démos</span> réelles, pas des maquettes
          </>
        }
        subtitle="Clique, navigue, teste sur mobile : voilà exactement le niveau de finition que tu recevras."
      />
      <Demos />
    </Layout>
  );
}

