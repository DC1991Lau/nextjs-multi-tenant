import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const paragraphVariants = cva(
  "max-w-prose text-slate-900 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        defautl: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
    },
  }
);

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn(paragraphVariants({ size, className }))}>
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
