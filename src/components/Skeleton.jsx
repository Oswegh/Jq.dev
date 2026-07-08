/**
 * Reusable skeleton primitives for lazy-loaded sections (e.g. Projects grid).
 *
 * Usage:
 *   <ProjectCardSkeleton />           — full card placeholder
 *   <Skeleton className="h-4 w-32" /> — custom block
 */

export function Skeleton({ className = "", ...props }) {
  return (
    <div
      className={`skeleton ${className}`.trim()}
      aria-hidden="true"
      {...props}
    />
  );
}

export function SkeletonText({ lines = 3, className = "" }) {
  const widths = ["w-full", "w-5/6", "w-4/6", "w-3/4"];

  return (
    <div className={`space-y-2 ${className}`.trim()}>
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton
          key={i}
          className={`h-3 ${widths[i % widths.length]}`}
        />
      ))}
    </div>
  );
}

/** Ready-made placeholder for a project card — wire up when Projects section exists */
export function ProjectCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <Skeleton className="aspect-video w-full rounded-none" />
      <div className="space-y-3 p-5">
        <Skeleton className="h-4 w-2/3" />
        <SkeletonText lines={2} />
        <div className="flex gap-2 pt-1">
          <Skeleton className="h-6 w-14 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
      </div>
    </article>
  );
}

/** Grid wrapper — drop into any section while data/images load */
export function ProjectGridSkeleton({ count = 3 }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }, (_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
