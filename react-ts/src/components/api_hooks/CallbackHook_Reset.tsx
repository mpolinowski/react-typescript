import { memo } from 'react';
import { Button } from "@/components/ui/button"

type Props = {
    onClick: () => void,
}

export const Reset = memo(({ onClick }: Props) => {
    console.log("INFO :: Rendering reset");
    return <Button variant="destructive" className='mx-1' onClick={onClick}>Reset</Button>;
});

Reset.displayName = 'Reset';