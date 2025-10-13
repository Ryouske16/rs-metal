import BlogArticleClient from "./BlogArticleClient";

// ✅ Centralised article data
const articles = {
  "cad-preparation": {
    title: "How to Prepare CAD Drawings",
    content:
      "Learn how to export DXF/DWG files for accurate metal fabrication, with correct layer setup and tolerances.",
  },
  "laser-vs-plasma": {
    title: "Laser vs Plasma Cutting",
    content:
      "A quick comparison between laser and plasma cutting — precision, cost, and finish quality explained.",
  },
} as const;

type ArticleKey = keyof typeof articles;

// ✅ Metadata for SEO (server-side)
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
    description: `Read RS Metal’s insights on ${article.title.toLowerCase()}.`,
  };
}

// ✅ Main page component (server)
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
        <p className="text-gray-400 mt-2">
          The article you’re looking for doesn’t exist or may have been moved.
        </p>
      </section>
    );
  }

  return <BlogArticleClient article={article} />;
}
