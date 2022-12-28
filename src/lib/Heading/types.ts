import { PropsWithChildren, ReactNode } from "react";

interface IHeadingProps extends PropsWithChildren {
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export type {IHeadingProps}