import { PropsWithChildren } from "react";

interface ITextProps extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export type {ITextProps}