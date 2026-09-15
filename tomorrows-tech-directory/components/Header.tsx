import { RobotMark } from './RobotMark';

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
        <div className="flex items-center gap-4">
          <RobotMark className="h-12 w-12 shrink-0" animated />
          <div>
            <p className="font-display text-sm font-medium tracking-wide text-glow">
              Tomorrow&rsquo;s Tech
            </p>
            <h1 className="font-display text-2xl font-bold text-ink1 sm:text-3xl">
              Free AI Tools Directory
            </h1>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-ink2">
          50+ AI tools with a genuine free tier &mdash; no trials, no
          bait-and-switch. Every entry is checked before it&rsquo;s listed.
        </p>
      </div>
    </header>
  );
}
