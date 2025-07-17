const modules = import.meta.glob("./**/*.tsx", { eager: true });

export const projects: Record<string, { path: string, data: any }> = {};

for (const filePath in modules) {
  const mod = modules[filePath] as { data: any };
  const slug = mod.data.slug;

  if (!slug) {
    continue;
  }

  projects[slug] = {
    path: slug,
    data: mod.data,
  };
}