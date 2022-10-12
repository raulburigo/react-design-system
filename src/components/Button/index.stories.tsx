import { Meta, StoryObj} from '@storybook/react';
import { Button } from ".";
import { IButtonProps } from './types';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Click here',
    },
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
} as Meta<IButtonProps>

export const Default: StoryObj<IButtonProps> = {}