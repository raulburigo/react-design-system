import { clsx } from 'clsx';
import { IButtonProps } from "./types";
import { Slot } from '@radix-ui/react-slot';

export function Button({children, asChild}: IButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={clsx("text-black py-4 px-3 rounded font-semibold color bg-cyan-500 hover:bg-cyan-300 text-sm w-full transition-colors focus:ring-2 ring-white")}>{children}</Comp>
    )
}