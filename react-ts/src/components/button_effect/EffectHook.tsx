import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"

export function EffectHook() {

    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
                console.log("INFO :: Effect hooked");
        }
    }, [clicked]);

    function handleClick() {
        setClicked(true);
    }
    return <Button variant="destructive" onClick={handleClick}>Cause effect</Button>;
}