import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "rectangular" | "circular";
}

export function Skeleton({ className = "", variant = "rectangular" }: SkeletonProps) {
  const baseClasses = "animate-pulse bg-muted";

  const variantClasses = {
    text: "h-4 rounded",
    rectangular: "rounded-md",
    circular: "rounded-full",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl overflow-hidden border shadow-sm"
    >
      <Skeleton className="w-full h-48" />
      <div className="p-6">
        <Skeleton className="h-6 w-3/4 mb-3" variant="text" />
        <Skeleton className="h-4 w-full mb-2" variant="text" />
        <Skeleton className="h-4 w-2/3 mb-4" variant="text" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-9 w-20 rounded-md" />
          <Skeleton className="h-9 w-24 rounded-md" />
        </div>
      </div>
    </motion.div>
  );
}

export function BlogCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl overflow-hidden border shadow-sm"
    >
      <Skeleton className="w-full h-48" />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-20" variant="text" />
        </div>
        <Skeleton className="h-6 w-full mb-3" variant="text" />
        <Skeleton className="h-4 w-full mb-2" variant="text" />
        <Skeleton className="h-4 w-3/4 mb-4" variant="text" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-24" variant="text" />
          <Skeleton className="h-4 w-16" variant="text" />
        </div>
      </div>
    </motion.div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl p-6 border shadow-sm"
    >
      <Skeleton className="w-12 h-12 rounded-lg mb-4" />
      <Skeleton className="h-6 w-3/4 mb-3" variant="text" />
      <Skeleton className="h-4 w-full mb-2" variant="text" />
      <Skeleton className="h-4 w-5/6 mb-4" variant="text" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" variant="text" />
        <Skeleton className="h-3 w-4/5" variant="text" />
        <Skeleton className="h-3 w-3/4" variant="text" />
      </div>
    </motion.div>
  );
}