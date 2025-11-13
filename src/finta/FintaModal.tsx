import React from "react";
import { IconX } from "@tabler/icons-react";
type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: React.ReactElement | string | undefined|null;
};
const FintaModal = ({ setIsOpen, data }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-[#dedede80] flex justify-center items-center z-100">
    <div className="relative w-[450px] h-[450px] bg-white shadow-2xl rounded-2xl">
      <IconX className="absolute top-5 right-5 w-5 text-neutral-400 h-5 z-100" onClick={() => setIsOpen(false)} />
        <div className="flex flex-col items-center">
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
