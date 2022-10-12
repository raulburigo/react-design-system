import { clsx } from 'clsx';
import { IHeadingProps } from "./types";
import { Slot } from '@radix-ui/react-slot';

export function Heading({size = 'md', children, asChild}: IHeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp className={clsx("text-gray-100 font-bold", {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg'
        })}>{children}</Comp>
    )
}