import { clsx } from 'clsx';
import { ITextProps } from "./types";
import { Slot } from '@radix-ui/react-slot';

export function Text({size = 'md', children, asChild}: ITextProps) {
    const Comp = asChild ? Slot : 'span';

    return (
        <Comp className={clsx("text-gray-100", {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-md': size === 'lg'
        })}>{children}</Comp>
    )
}