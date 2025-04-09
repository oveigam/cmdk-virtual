import { useCallback, useRef, useState } from "react";
import { largeData } from "./data";
import { useVirtualizer } from "@tanstack/react-virtual";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./components/ui/command";
import { CheckIcon } from "lucide-react";
import { cn } from "./lib/utils";

export const Separated = () => {
  return (
    <Popover>
      <PopoverTrigger>OPEN</PopoverTrigger>
      <PopoverContent className="w-auto max-w-[500px] min-w-[200px] p-0">
        <Command shouldFilter={false}>
          <CommandInput placeholder="Search..." />
          <VirtualizedList data={largeData} />
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const VirtualizedList = ({ data }: { data: typeof largeData }) => {
  const [selected, setSelected] = useState("");

  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 32,
    overscan: 50,
  });

  return (
    <CommandList ref={parentRef}>
      <CommandEmpty className="text-muted-foreground">Not found</CommandEmpty>
      <CommandGroup
        className="relative"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          const data = largeData[virtualItem.index];

          const isSelected = data === selected;

          return (
            <CommandItem
              key={virtualItem.key}
              className="absolute top-0 left-0 w-full"
              style={{
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
              onSelect={() => {
                if (isSelected) {
                  setSelected(data);
                } else {
                  setSelected("");
                }
              }}
            >
              <CheckIcon
                className={cn(
                  "mr-2 h-4 w-4",
                  isSelected ? "opacity-100" : "opacity-0"
                )}
              />
              <span className="truncate">{data}</span>
            </CommandItem>
          );
        })}
      </CommandGroup>
    </CommandList>
  );
};
