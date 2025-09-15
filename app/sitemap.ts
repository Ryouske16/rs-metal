import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rs-metal.vercel.app", // change to your custom domain later
      lastModified: new Date(),
    },
  ];
}
