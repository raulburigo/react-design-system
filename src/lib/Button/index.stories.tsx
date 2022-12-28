import { Meta } from '@storybook/react';
import { Button } from ".";
import { DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_VARIANT, IButtonProps } from './types';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Click here',
  },
  argTypes: {
    variant: { control: 'inline-radio', defaultValue: DEFAULT_BUTTON_VARIANT },
    size: { control: 'inline-radio', defaultValue: DEFAULT_BUTTON_SIZE },
    disabled: { control: 'boolean', defaultValue: false },
  },
} as Meta<IButtonProps>
  
export const Default = {}
export const Secondary = { args: { variant: 'secondary' } }
export const Cancel = { args: { variant: 'cancel' } }
export const Large = { args: { size: 'lg' } }

export const LargeSecondary = {
  args: { ...Large.args, ...Secondary.args },
}

export const Disabled = { args: { disabled: true } }
export const DisabledSecondary = {
  args: { ...Disabled.args, ...Secondary.args },
}
export const DisabledCancel = { args: { ...Disabled.args, ...Cancel.args } }
