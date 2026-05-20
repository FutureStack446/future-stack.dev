"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
          <h2 className="text-3xl font-bold mb-4">Oops! A critical error occurred.</h2>
          <p className="text-muted-foreground mb-6">We're sorry, but something unexpected happened. Please try again.</p>
          <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium" onClick={() => reset()}>
            Reload page
          </button>
        </div>
      </body>
    </html>
  );
}