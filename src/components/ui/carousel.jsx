import * as React from "react";

import { cn } from "@/lib/utils";

const Carousel = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("relative w-full", className)} {...props} />
));
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props} />
));
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-shrink-0 w-full", className)} {...props} />
));
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("absolute left-0 top-1/2 -translate-y-1/2", className)}
    {...props}
  />
));
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("absolute right-0 top-1/2 -translate-y-1/2", className)}
    {...props}
  />
));
CarouselNext.displayName = "CarouselNext";

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
