import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '.'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import {
  DEFAULT_PRIMARY_COLOR,
  DEFAULT_PRIMARY_TEXT_COLOR,
  DEFAULT_SECONDARY_COLOR,
  DEFAULT_SECONDARY_TEXT_COLOR,
  styled
} from '../../theme/stitches.config'
import { IThemeProps } from './types'
import { PropsWithChildren } from 'react'
import { cssVar } from 'polished'

const TestBox = styled('div', {
  padding: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bolder'
})

const ThemeTestChildren = () => {
  return (
    <>
      <TestBox
        key="1"
        data-testid="primary-box"
        css={{ backgroundColor: '$primary', color: '$primaryText' }}
      >
        <p>PRIMARY COLORS</p>
      </TestBox>
      ,
      <TestBox
        key="2"
        data-testid="secondary-box"
        css={{ backgroundColor: '$secondary', color: '$secondaryText' }}
      >
        <p>SECONDARY COLORS</p>
      </TestBox>
    </>
  )
}

export default {
  title: 'ThemeProvider',
  component: ThemeProvider
} as Meta<IThemeProps>

const testColors = {
  primary: '#23c057',
  primaryText: '#0c0c0a',
  secondary: '#49125c',
  secondaryText: '#f6f6f8'
}
export const Default: StoryObj<PropsWithChildren<IThemeProps>> = {
  args: {
    children: <ThemeTestChildren />
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const PrimaryBox = canvas.getByTestId('primary-box')
    const SecondaryBox = canvas.getByTestId('secondary-box')

    // testa a aplicação do tema
    expect(PrimaryBox).toHaveStyle(
      `background-color: ${DEFAULT_PRIMARY_COLOR}; color: ${DEFAULT_PRIMARY_TEXT_COLOR}`
    )
    expect(SecondaryBox).toHaveStyle(
      `background-color: ${DEFAULT_SECONDARY_COLOR}; color: ${DEFAULT_SECONDARY_TEXT_COLOR}`
    )
  }
}
export const WithCustomColors: StoryObj<PropsWithChildren<IThemeProps>> = {
  args: {
    children: <ThemeTestChildren />,

    colors: {
      ...testColors
    }
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const PrimaryBox = canvas.getByTestId('primary-box')
    const SecondaryBox = canvas.getByTestId('secondary-box')

    // garante que as cores do tema default não são as mesmas utilizadas no teste
    expect(cssVar('--mf-colors-primary', '#FFFFFF')).not.toBe(
      testColors.primary
    )
    expect(cssVar('--mf-colors-primaryText', '#FFFFFF')).not.toBe(
      testColors.primaryText
    )
    expect(cssVar('--mf-colors-secondary', '#FFFFFF')).not.toBe(
      testColors.secondary
    )
    expect(cssVar('--mf-colors-secondaryText', '#FFFFFF')).not.toBe(
      testColors.secondaryText
    )

    // testa a aplicação do tema
    expect(PrimaryBox).toHaveStyle(
      `background-color: ${testColors.primary}; color: ${testColors.primaryText}`
    )
    expect(SecondaryBox).toHaveStyle(
      `background-color: ${testColors.secondary}; color: ${testColors.secondaryText}`
    )
  }
}
