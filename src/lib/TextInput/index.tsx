import { ITextInputIconProps, ITextInputInputProps, ITextInputRootProps } from "./types";
import { Slot } from '@radix-ui/react-slot';

function TextInputRoot({children}: ITextInputRootProps) {
    return (
        <div className="flex w-full h-12 items-center gap-3 rounded py-4 px-3 focus-within:ring-2 ring-cyan-300 bg-gray-800">
            {children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

function TextInputIcon({children}: ITextInputIconProps) {
    return (
        <Slot className="w-6 h-6 text-gray-400">
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputInput({...props}: ITextInputInputProps) {
    return (
        <input
            className="text-gray-100 placeholder:text-gray-400 outline-none bg-transparent text-xs flex-1"
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}