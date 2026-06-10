import { useState } from 'react'
import { cn } from '../lib/cn'

/**
 * Image with graceful degradation. If the remote source fails to load it
 * falls back to a branded gradient block so the layout never shows a broken
 * image — keeping the page production-safe even if a CDN URL changes.
 */
export default function SmartImage({
  src,
  alt = '',
  className,
  imgClassName,
  loading = 'lazy',
  ...props
}) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={cn('relative overflow-hidden bg-brand-50', className)} {...props}>
      {failed ? (
        <div
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-100 via-brand-50 to-accent-50"
        >
          <svg viewBox="0 0 64 64" className="h-14 w-14 opacity-50">
            <path
              d="M32 16.5c-3.2-2.4-7-3-10.2-1.6-3.7 1.6-5.8 5.5-5.8 10.3 0 4.2 1.1 8.6 2.6 12.9 1 2.9 1.6 5.8 2 8.2.4 2.4 2 3.7 3.6 3.5 1.7-.2 2.6-1.8 3-4.1.5-2.7 1-5.2 2.1-6.7.7-1 1.7-1.5 2.7-1.5s2 .5 2.7 1.5c1.1 1.5 1.6 4 2.1 6.7.4 2.3 1.3 3.9 3 4.1 1.6.2 3.2-1.1 3.6-3.5.4-2.4 1-5.3 2-8.2 1.5-4.3 2.6-8.7 2.6-12.9 0-4.8-2.1-8.7-5.8-10.3C39 13.5 35.2 14.1 32 16.5Z"
              fill="#433B9D"
            />
          </svg>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
          className={cn('h-full w-full object-cover', imgClassName)}
        />
      )}
    </div>
  )
}
