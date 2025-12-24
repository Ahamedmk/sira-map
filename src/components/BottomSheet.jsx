import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../lib/utils.js";
import { X } from "lucide-react";

export default function BottomSheet({
  open,
  onOpenChange,
  title,
  description,
  children,
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40" />
        <Dialog.Content
          className={cn(
            "fixed z-10050 left-1/2 -translate-x-1/2 bottom-0 w-full max-w-md",
            "rounded-t-3xl border bg-white shadow-lg",
            "p-4 pb-6 outline-none"
          )}
        >
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-neutral-200" />
          <div className="flex items-start justify-between gap-3">
            <div>
              <Dialog.Title className="text-base font-semibold">
                {title}
              </Dialog.Title>
              {description ? (
                <Dialog.Description className="text-sm text-neutral-600 mt-1">
                  {description}
                </Dialog.Description>
              ) : null}
            </div>

            <Dialog.Close className="rounded-xl p-2 hover:bg-neutral-100">
              <X size={18} />
            </Dialog.Close>
          </div>

          <div className="mt-4">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
