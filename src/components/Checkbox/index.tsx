import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export function Checkbox() {
    return (
        <CheckboxPrimitive.Root className='h-6 w-6 bg-gray-800 p-[2px] rounded'>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='text-cyan-500 h-5 w-5' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}