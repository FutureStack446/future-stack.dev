"use client";

import { WifiOff, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OfflinePage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-6">
        <WifiOff className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
        <h1 className="text-2xl font-bold mb-4">You're Offline</h1>
        <p className="text-muted-foreground mb-8">
          It looks like you've lost your internet connection. Please check your connection and try again.
        </p>
        <Button onClick={handleRefresh} className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
}