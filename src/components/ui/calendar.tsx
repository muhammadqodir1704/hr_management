import * as React from "react";

import { DayPicker } from "react-day-picker";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-2", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-2",
        caption: "flex justify-center pt-1 relative items-center w-full mb-6",
        caption_label: "text-sm font-semibold text-[16px]",
        nav: "flex items-center gap-1",
        nav_button: cn(
          "size-9 bg-transparent p-0 cursor-pointer active:opacity-70"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex gap-2",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start:
          "day-range-start aria-selected:bg-[#7152F3] aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-[#7152F3] aria-selected:text-primary-foreground",
        day_selected:
          "bg-[#7152F3] text-primary-foreground hover:bg-[#7152F3] hover:text-primary-foreground focus:bg-[#7152F3] focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ArrowLeftIcon
            className={cn(
              "size-6 w-[34px] h-[34px] p-2 rounded-[5px] bg-[#7152F3] text-white"
            )}
            {...props}
          />
        ),
        IconRight: ({ className, ...props }) => (
          <ArrowRightIcon
            className={cn(
              "size-6 w-[34px] h-[34px] p-2 rounded-[5px] bg-[#7152F3] text-white",
              className
            )}
            {...props}
          />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
