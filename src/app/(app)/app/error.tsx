"use client";

import Paragraph from "@/components/ui/Paragraph";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Paragraph>Something went wrong while loading this page.</Paragraph>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
