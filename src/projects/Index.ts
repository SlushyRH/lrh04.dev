const modules = import.meta.glob("./**/!(_)*.tsx", { eager: true });

export const projects: Record<string, { path: string, data: any }> = {};

for (const filePath in modules) {
  const mod = modules[filePath] as { metadata: any };
  const slug = mod.metadata.slug;

  if (!slug) {
    continue;
  }

  projects[slug] = {
    path: slug,
    data: mod.metadata,
  };
}