import React, { useEffect } from "react";
import { IconX } from "@tabler/icons-react";

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: React.ReactElement | string | undefined | null;
  /** Tailwind/class string to control modal width (default: max-w-[450px]) */
  width?: string;
  /** Tailwind/class string to control modal height (default: max-h-[450px]) */
  height?: string;
  /** Padding classes to apply inside modal card (default: p-6). Pass empty string '' for no padding */
  padding?: string;
  /** Position of the modal on screen: 'center' | 'right' | 'left' (default: 'center') */
  position?: "center" | "right" | "left";
  top?: "top" | "center";
  /** Additional classes for overlay */
  overlayClassName?: string;
  /** Additional classes for card */
  cardClassName?: string;
  /** Close modal when Escape is pressed (default: false) */
  closeOnEsc?: boolean;
};

const FintaModal = ({
  setIsOpen,
  data,
  top= "center",
  width = "max-w-[450px]",
  height = "max-h-[450px]",
  padding = "p-6",
  position = "center",
  overlayClassName = "",
  cardClassName = "",
  closeOnEsc = false,
}: ModalProps) => {
  useEffect(() => {
    if (!closeOnEsc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeOnEsc, setIsOpen]);

  const alignmentClass =
    position === "center"
      ? "justify-center"
      : position === "right"
      ? "justify-end"
      : "justify-start";
const topAlignmentClass = top === "top"?"items-start":"items-center"
  return (
    <div
      className={`fixed inset-0 bg-[#dedede80] flex z-100 ${alignmentClass} ${topAlignmentClass} ${overlayClassName}`}
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative ${width} ${height} bg-white shadow-2xl rounded-2xl overflow-hidden ${cardClassName}`}
        onClick={(e) => e.stopPropagation()}
      >
        <IconX
          className="absolute top-5 right-5 w-5 text-neutral-400 h-5 z-100 cursor-pointer"
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
        />
        <div className={`flex flex-col items-center ${padding}`}>
          {typeof data === "string" ? (
            <p>{data}</p>
          ) : !data ? (
            <h1>Nothing to show</h1>
          ) : (
            data
          )}
        </div>
      </div>
    </div>
  );
};

export default FintaModal;
