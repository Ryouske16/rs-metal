export default function sitemap(){
  const base = "https://example.com"\;
  const now = new Date();
  const routes = ["","/services","/capabilities","/process","/projects","/contact"];
  return routes.map(r => ({ url: base + r, lastModified: now }));
}
