/** Minimal centered loader shown while a lazily-loaded page chunk resolves. */
export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <span
        className="h-10 w-10 animate-spin rounded-full border-[3px] border-brand-100 border-t-brand-600"
        role="status"
        aria-label="Loading"
      />
    </div>
  )
}
