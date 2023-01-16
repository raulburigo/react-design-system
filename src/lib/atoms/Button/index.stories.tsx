import { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'
import { IButtonProps } from './types'
import { within, userEvent } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
import {
  DEFAULT_PRIMARY_COLOR,
  DEFAULT_PRIMARY_TEXT_COLOR,
  DEFAULT_SECONDARY_COLOR,
  DEFAULT_SECONDARY_TEXT_COLOR
} from '../../../theme/stitches.config'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Click here'
  },
  argTypes: {
    variant: { control: 'inline-radio' },
    size: { control: 'inline-radio' },
    disabled: { control: 'boolean', defaultValue: false }
  }
} as Meta<IButtonProps>

export const Default: StoryObj = {
  args: { onClick: () => console.log('hello') },
  play: async ({ canvasElement }) => {
    console.log = jest.fn()
    const canvas = within(canvasElement)
    const buttonEl = canvas.getByRole('button', { name: /Click here/i })

    expect(buttonEl.innerText).toBe('Click here')
    expect(buttonEl).toHaveStyle(
      `background-color: ${DEFAULT_PRIMARY_COLOR}; color: ${DEFAULT_PRIMARY_TEXT_COLOR}`
    )

    userEvent.click(buttonEl)

    expect(console.log).toHaveBeenCalledWith('hello')
  }
}

export const Secondary: StoryObj = {
  args: { variant: 'secondary' },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const buttonEl = canvas.getByRole('button', { name: /Click here/i })

    expect(buttonEl.innerText).toBe('Click here')
    expect(buttonEl).toHaveStyle(
      `background-color: ${DEFAULT_SECONDARY_COLOR}; color: ${DEFAULT_SECONDARY_TEXT_COLOR}`
    )
  }
}

export const Cancel: StoryObj = { args: { variant: 'cancel' } }
export const Large: StoryObj = { args: { size: 'lg' } }

export const LargeSecondary: StoryObj = {
  args: { ...Large.args, ...Secondary.args }
}

export const Disabled: StoryObj = {
  args: { disabled: true, onClick: () => console.log('hello') },
  play: async ({ canvasElement }) => {
    console.log = jest.fn()
    const canvas = within(canvasElement)
    const buttonEl = canvas.getByRole('button', { name: /Click here/i })

    expect(buttonEl).toBeDisabled()

    userEvent.click(buttonEl)

    expect(console.log).not.toHaveBeenCalled()
  }
}
