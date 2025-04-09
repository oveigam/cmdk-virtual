import { useCallback, useState } from "react";
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

const data = largeData.slice(0, 500);

export const NoVirtualization = () => {
  const [selected, setSelected] = useState("");

  return (
    <Popover>
      <PopoverTrigger>OPEN</PopoverTrigger>
      <PopoverContent className="w-auto max-w-[500px] min-w-[200px] p-0">
        <Command shouldFilter={false}>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty className="text-muted-foreground">
              Not found
            </CommandEmpty>
            <CommandGroup>
              {data.map((item) => {
                const isSelected = item === selected;

                return (
                  <CommandItem
                    key={item}
                    onSelect={() => {
                      if (isSelected) {
                        setSelected(item);
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
                    <span className="truncate">{item}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
