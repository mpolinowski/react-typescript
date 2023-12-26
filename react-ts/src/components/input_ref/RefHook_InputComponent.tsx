import { useRef } from "react";

import { Input } from "@/components/ui/input"

export function InputComponent() {
    const inputRef = useRef<HTMLInputElement>(null);
  
    function logInput() {
      console.log(inputRef.current);
    }
    return <Input className="my-24" ref={inputRef} onChange={logInput} type="text" />;
}