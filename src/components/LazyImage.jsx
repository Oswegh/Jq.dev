import { useState } from "react";
import { Skeleton } from "./Skeleton";

export default function LazyImage({
  src,
  alt,
  className = "",
  skeletonClassName = "",
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${skeletonClassName}`.trim()}>
      {!loaded && !error && (
        <Skeleton className="absolute inset-0 rounded-none" aria-hidden="true" />
      )}

      {error ? (
        <div className="flex aspect-video items-center justify-center bg-white/5 text-xs text-[#666693]">
          Image unavailable
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${className}`.trim()}
          {...props}
        />
      )}
    </div>
  );
}