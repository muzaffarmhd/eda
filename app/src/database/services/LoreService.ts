import Showdown from 'showdown';

export class LoreService {
  private markdownModules = import.meta.glob('/src/database/lore/*.md', { as: 'raw' });
  private markdownConverter = new Showdown.Converter();

  async listMarkdownFiles(): Promise<{ name: string; path: string }[]> {
    const entries = Object.keys(this.markdownModules);
    return entries.map((fullPath) => {
      const nameWithExt = fullPath.split('/').pop() || '';
      const name = nameWithExt.replace(/\.md$/i, '');
      return { name, path: fullPath };
    });
  }

  async loadMarkdownAsHtml(name: string): Promise<{ title: string; html: string } | null> {
    const files = await this.listMarkdownFiles();
    const match = files.find((f) => f.name === name);
    if (!match) return null;
    const loader = this.markdownModules[match.path] as () => Promise<string>;
    const markdown = await loader();
    const html = this.markdownConverter.makeHtml(markdown);
    return { title: name, html };
  }
}

export const loreService = new LoreService();


