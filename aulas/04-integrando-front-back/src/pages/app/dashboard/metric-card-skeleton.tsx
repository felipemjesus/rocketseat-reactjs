import { Skeleton } from "@/components/ui/skeleton";

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="h-7 w-20 mt-1" />
      <Skeleton className="h-4 w-full" />
    </>
  )
}
