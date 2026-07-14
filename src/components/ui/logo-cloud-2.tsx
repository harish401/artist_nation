import type * as React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type LogoCloudItem = {
  value: string;
  label: string;
  detail?: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  items: LogoCloudItem[];
};

export function LogoCloud({ items, className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn("relative grid grid-cols-2 overflow-hidden border-x border-white/10 md:grid-cols-4", className)}
      {...props}
    >
      <div className="-top-px pointer-events-none absolute left-1/2 w-screen -translate-x-1/2 border-t border-white/10" />
      {items.map((item, index) => (
        <LogoMetricCard
          key={item.label}
          item={item}
          className={cn(
            "border-b border-white/10",
            index % 2 === 0 && "border-r",
            index < items.length - 1 && "md:border-r",
            index % 2 === 0 ? "bg-white/[0.035]" : "bg-black/25",
            index > 1 && "md:border-b-0"
          )}
          showPlus={index === 0 || index === 2}
        />
      ))}
      <div className="-bottom-px pointer-events-none absolute left-1/2 w-screen -translate-x-1/2 border-b border-white/10" />
    </div>
  );
}

type LogoMetricCardProps = React.ComponentProps<"div"> & {
  item: LogoCloudItem;
  showPlus?: boolean;
};

function LogoMetricCard({ item, showPlus = false, className, ...props }: LogoMetricCardProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[112px] flex-col justify-center px-4 py-5 sm:min-h-32 sm:px-5 sm:py-6 md:min-h-36 md:p-8",
        className
      )}
      {...props}
    >
      {showPlus && (
        <PlusIcon
          className="-bottom-[10.5px] -right-[10.5px] absolute z-10 size-5 text-gold sm:-bottom-[12.5px] sm:-right-[12.5px] sm:size-6"
          strokeWidth={1}
          aria-hidden="true"
        />
      )}
      <p className="heading-display text-2xl text-white sm:text-3xl md:text-4xl">{item.value}</p>
      <p className="mt-2 text-[0.62rem] uppercase leading-snug tracking-[0.16em] text-gold sm:text-xs sm:tracking-[0.22em]">
        {item.label}
      </p>
      {item.detail && (
        <p className="mt-3 hidden max-w-[14rem] text-xs leading-relaxed text-white/45 sm:block">{item.detail}</p>
      )}
    </div>
  );
}
