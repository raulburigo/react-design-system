import { Meta, StoryObj} from '@storybook/react';
import { Text } from ".";
import { ITextProps } from './types';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'text simple',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<ITextProps>

export const Default: StoryObj<ITextProps> = {}

export const Small: StoryObj<ITextProps> = {
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj<ITextProps> = {
    args: {
        size: 'lg'
    }
}
export const CustomComponent: StoryObj<ITextProps> = {
    args: {
        asChild: true,
        children: (<p>paragraph</p>)
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        },
    }
}