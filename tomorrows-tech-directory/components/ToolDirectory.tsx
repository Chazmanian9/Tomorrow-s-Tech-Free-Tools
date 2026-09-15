'use client';

import { useMemo, useState } from 'react';
import toolsData from '@/data/tools.json';
import { RobotMark } from './RobotMark';

type Tool = {
  name: string;
  category: string;
  url: string;
  free_tier_fact: string;
};

const data = toolsData as { categories: string[]; tools: Tool[]; last_verified: string };

export function ToolDirectory() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return data.tools.filter((tool) => {
      const matchesCategory = activeCategory ? tool.category === activeCategory : true;
      const matchesQuery = query.trim()
        ? (tool.name + ' ' + tool.free_tier_fact).toLowerCase().includes(query.trim().toLowerCase())
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const grouped = useMemo(() => {
    const map = new Map<string, Tool[]>();
    for (const tool of filtered) {
      const list = map.get(tool.category) ?? [];
      list.push(tool);
      map.set(tool.category, list);
    }
    return map;
  }, [filtered]);

  return (
    <div className="mx-auto max-w-3xl px-6 pb-24">
      {/* search */}
      <div className="sticky top-0 z-10 -mx-6 bg-ink/90 px-6 pb-4 pt-6 backdrop-blur">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tools or tasks (e.g. 'transcribe a meeting')"
          className="w-full rounded-md border border-line bg-panel px-4 py-3 text-ink1 placeholder:text-ink2/70 focus:border-accent"
        />

        {/* category filters */}
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded border px-3 py-1.5 font-display transition-colors ${
              activeCategory === null
                ? 'border-accent bg-accent/15 text-glow'
                : 'border-line text-ink2 hover:border-accent/50 hover:text-ink1'
            }`}
          >
            [ All ]
          </button>
          {data.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded border px-3 py-1.5 font-display transition-colors ${
                activeCategory === cat
                  ? 'border-accent bg-accent/15 text-glow'
                  : 'border-line text-ink2 hover:border-accent/50 hover:text-ink1'
              }`}
            >
              [ {cat} ]
            </button>
          ))}
        </div>
      </div>

      {/* results */}
      <div className="mt-6">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <RobotMark className="h-14 w-14 opacity-60" />
            <div>
              <p className="font-display text-ink1">No tools match that search.</p>
              <p className="mt-1 text-sm text-ink2">
                Try a different word, or clear the filter above.
              </p>
            </div>
          </div>
        ) : (
          Array.from(grouped.entries()).map(([category, tools]) => (
            <section key={category} className="mb-8">
              <h2 className="mb-2 font-display text-sm font-medium tracking-wide text-glow">
                {category}
              </h2>
              <div className="divide-y divide-line rounded-md border border-line bg-panel/40">
                {tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-4 px-4 py-4 transition-colors hover:bg-panelhover"
                  >
                    <div>
                      <p className="font-display font-bold text-ink1 group-hover:text-glow">
                        {tool.name}
                      </p>
                      <p className="mt-1 text-sm text-ink2">{tool.free_tier_fact}</p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-ink2 transition-colors group-hover:text-glow"
                    >
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ))
        )}
      </div>

      <p className="mt-10 text-center text-xs text-ink2/70">
        Free-tier details verified {data.last_verified}. Limits change &mdash; always confirm on the tool&rsquo;s own site before relying on a number.
      </p>
    </div>
  );
}
