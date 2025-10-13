import BlogArticleClient from "./BlogArticleClient";

const articles = {
  "cad-preparation": {
    title: "How to Prepare CAD Drawings for Metal Fabrication",
    content: `
      Preparing your CAD drawings properly before fabrication saves time, money, and prevents costly rework.
      At RS Metal, we recommend following these best practices:

      • Export your files in DXF or DWG format for 2D profiles.
      • Ensure all dimensions are real-world units (millimetres, not pixels).
      • Avoid duplicate or overlapping lines – they cause cutting errors.
      • Check hole sizes — ensure they’re large enough for your laser or plasma setup.
      • Keep text or labels on a separate layer (if needed for engraving).
      • Verify bend lines and radii align with the material thickness and tooling.

      A clean, well-organised drawing ensures your part is cut with maximum precision and minimal adjustments.
    `,
  },
  "laser-vs-plasma": {
    title: "Laser vs Plasma Cutting: Which Should You Choose?",
    content: `
      Both laser and plasma cutting are highly effective, but they suit different applications.

      🔹 **Laser Cutting**
      • Ideal for thin to medium-thickness materials.
      • Produces very fine cuts and clean edges.
      • Excellent for detailed profiles and small holes.
      • More accurate, but generally more expensive.

      🔹 **Plasma Cutting**
      • Best for thicker steel and aluminium.
      • Faster and more cost-effective for heavy-duty work.
      • Edges are slightly rougher but sufficient for structural parts.

      At RS Metal, we help you select the most efficient method based on your project’s tolerances, finish, and cost targets.
    `,
  },
} as const;

type ArticleKey = keyof typeof articles;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug as ArticleKey | undefined;
  const article = slug ? articles[slug] : undefined;

  if (!article) {
    return {
      title: "Article Not Found — RS Metal",
      description: "This article could not be found.",
    };
  }

  return {
    title: `${article.title} — RS Metal`,
    description: `RS Metal insights on ${article.title.toLowerCase()}.`,
  };
}

export default function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug as ArticleKey | undefined;
  const article = slug ? articles[slug] : undefined;

  if (!article) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-oswald">Article Not Found</h1>
      </section>
    );
  }

  return <BlogArticleClient article={article} />;
}
