import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { button } from "@/components/ui/button";

const Calendar = React.forwardRef(
  ({ className, classNames = {}, showOutsideDays = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-3", className)}
        {...props}
      >
        <div className="text-center">Calendar Component</div>
      </div>
    );
  },
);
Calendar.displayName = "Calendar";

export { Calendar };
