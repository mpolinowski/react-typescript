import { useState } from 'react';
import { XCircle } from "lucide-react"

import AlertIcon from "@/assets/alert-triangle.svg?react";
import InfoIcon from "@/assets/info.svg?react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Props = {
  type?: string;
  heading: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
};

export function AlertNotify({ type = 'warning', heading, children, closable, onClose }: Props) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }
  return (
    <Alert className={`
      inline-flex flex-col text-left px-4 py-3 float-right
      rounded-md border-1 border-transparent max-w-fit
      ${ type === 'warning' ? 'text-amber-900' : 'text-teal-900'}
      ${ type === 'warning' ? 'bg-amber-50' : 'bg-teal-50'}
    `} >
      <AlertTitle className="flex justify-between font-bold mb-3">
        {type === 'warning' ? <AlertIcon/> : <InfoIcon/>}
        { heading }
        { closable && (
          <button
            aria-label="Close"
            onClick={ handleCloseClick }
            className='cursor-pointer'
            >
              <XCircle aria-label="Close" size={20} strokeWidth={1.5} />
          </button>
      )}
      </AlertTitle>
      <AlertDescription className="text-black">
        { children }
      </AlertDescription>
    </Alert>
  );
}

