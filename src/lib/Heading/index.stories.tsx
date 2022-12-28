import { Meta, StoryObj} from '@storybook/react';
import { Heading } from ".";
import { IHeadingProps } from './types';

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Title Simple',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<IHeadingProps>

export const Default: StoryObj<IHeadingProps> = {}

export const Small: StoryObj<IHeadingProps> = {
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj<IHeadingProps> = {
    args: {
        size: 'lg'
    }
}
export const CustomComponent: StoryObj<IHeadingProps> = {
    args: {
        asChild: true,
        children: (<h1>Title with h1</h1>)
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
}