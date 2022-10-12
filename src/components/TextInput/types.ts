import { HTMLProps, InputHTMLAttributes, PropsWithChildren, ReactNode } from "react";

interface ITextInputRootProps extends PropsWithChildren {}
interface ITextInputIconProps extends PropsWithChildren {}
interface ITextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export type { ITextInputRootProps, ITextInputIconProps,  ITextInputInputProps }