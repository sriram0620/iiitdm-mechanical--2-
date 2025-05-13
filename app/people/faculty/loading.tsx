import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="relative">
        <Skeleton className="h-[300px] w-full" />
        <div className="container absolute inset-0 flex flex-col justify-center">
          <Skeleton className="h-12 w-48 mb-4" />
          <Skeleton className="h-6 w-96 mb-2" />
          <Skeleton className="h-6 w-80" />
        </div>
      </div>
      <div className="container py-8">
        <div className="flex flex-wrap gap-6 justify-center">
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-[400px] w-[300px] rounded-xl" />
            ))}
        </div>
      </div>
    </div>
  )
}
