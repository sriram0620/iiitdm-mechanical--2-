export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
      <h2 className="mt-4 text-xl font-semibold text-primary">Loading Staff Information...</h2>
    </div>
  )
}
