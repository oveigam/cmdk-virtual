import * as Popover from "@radix-ui/react-popover";
import { useCallback, useState } from "react";
import { Command } from "cmdk";
import { largeData } from "./data";
import { useVirtualizer } from "@tanstack/react-virtual";

export const Noshad = () => {
  const [parentNode, setParentNode] = useState<HTMLDivElement | null>(null);
  const refCallback = useCallback((node: HTMLDivElement) => {
    if (node) {
      setParentNode(node);
    }
  }, []);

  const rowVirtualizer = useVirtualizer({
    count: largeData.length,
    getScrollElement: () => parentNode,
    estimateSize: () => 32,
    overscan: 50,
  });

  return (
    <Popover.Root>
      <Popover.Trigger>OPEN</Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content
          style={{ background: "#f1f5f9", border: "1px solid #e2e8f0" }}
        >
          <Command shouldFilter={false}>
            <Command.Input />
            <Command.List
              ref={refCallback}
              style={{ maxHeight: 300, overflowY: "auto" }}
            >
              <Command.Group
                style={{
                  position: "relative",
                  height: `${rowVirtualizer.getTotalSize()}px`,
                }}
              >
                {rowVirtualizer.getVirtualItems().map((item) => {
                  const data = largeData[item.index]!;
                  return (
                    <Command.Item
                      key={item.key}
                      style={{
                        border: "1px solid black",
                        height: `${item.size}px`,
                        transform: `translateY(${item.start}px)`,
                      }}
                    >
                      {data}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            </Command.List>
          </Command>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
