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

        {/* OVERLAY – fade doux */}
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/40",
            "transition-opacity duration-300 ease-out",
            "data-[state=open]:opacity-100",
            "data-[state=closed]:opacity-0"
          )}
        />

        {/* CONTENT – slide-up doux */}
        <Dialog.Content
          className={cn(
            "fixed z-[10050] left-1/2 -translate-x-1/2 bottom-0 w-full max-w-md",
            "rounded-t-3xl border bg-white shadow-2xl",
            "p-4 pb-6 outline-none",

            /* 🧠 Animation douce */
            "will-change-transform",
            "transition-all duration-[420ms]",
            "ease-[cubic-bezier(0.16,1,0.3,1)]", // easing naturel (iOS-like)

            /* état fermé */
            "data-[state=closed]:translate-y-20",
            "data-[state=closed]:opacity-0",

            /* état ouvert */
            "data-[state=open]:translate-y-0",
            "data-[state=open]:opacity-100",

            /* petit délai → évite l’effet agressif */
            "data-[state=open]:delay-100",
            "data-[state=closed]:delay-0"
          )}
        >
          {/* poignée */}
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-neutral-200" />

          <div className="flex items-start justify-between gap-3">
            <div>
              <Dialog.Title className="text-base font-semibold">
                {title}
              </Dialog.Title>

              {description && (
                <Dialog.Description className="text-sm text-neutral-600 mt-1">
                  {description}
                </Dialog.Description>
              )}
            </div>

            <Dialog.Close className="rounded-xl p-2 hover:bg-neutral-100 transition">
              <X size={18} />
            </Dialog.Close>
          </div>

          <div className="mt-4">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
