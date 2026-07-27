import * as React from "react";

import { cn } from "@/lib/utils";

const ChartContainer = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex h-auto w-full", className)} {...props}>
    {children}
  </div>
));
ChartContainer.displayName = "ChartContainer";

const ChartStyle = ({ id, config }) => {
  const cssVariables = Object.entries(config).reduce((acc, [key, value]) => {
    if (value && typeof value === "object" && "color" in value) {
      acc[`--color-${key}`] = value.color;
    }
    return acc;
  }, {});

  return (
    <style>
      {`#${id} { ${Object.entries(cssVariables)
        .map(([key, value]) => `${key}: ${value};`)
        .join(" ")} }`}
    </style>
  );
};

const ChartTooltip = ({ active, payload, label, labelFormatter, formatter, contentStyle, labelStyle, wrapperStyle }) => {
  if (!active || !payload) {
    return null;
  }

  return (
    <div
      className="rounded-lg border bg-background p-2 shadow-md"
      style={wrapperStyle}
    >
      {label && (
        <div className="text-sm font-semibold" style={labelStyle}>
          {labelFormatter?.(label) ?? label}
        </div>
      )}
      {payload.map((item, index) => (
        <div key={index} className="text-sm" style={{ color: item.color }}>
          {formatter?.(item.value, item.name) ?? `${item.name}: ${item.value}`}
        </div>
      ))}
    </div>
  );
};

const ChartLegend = ({ payload, wrapperStyle }) => {
  return (
    <div
      className="flex flex-wrap gap-2"
      style={wrapperStyle}
    >
      {payload?.map((item, index) => (
        <div key={index} className="flex items-center gap-1 text-sm">
          <div
            className="h-3 w-3 rounded-sm"
            style={{ backgroundColor: item.color }}
          />
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export {
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartLegend,
};
