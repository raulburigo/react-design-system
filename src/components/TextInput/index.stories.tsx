import { Meta, StoryObj} from '@storybook/react';
import { TextInput } from ".";
import { ITextInputRootProps } from './types';
import {Envelope} from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='placeholder...'/>,
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
    }
} as Meta<ITextInputRootProps>

export const Default: StoryObj<ITextInputRootProps> = {}

export const WithoutIcon: StoryObj<ITextInputRootProps> = {
    args: {
        children: [
            <TextInput.Input placeholder='placeholder...'/>,
        ],
    },
}