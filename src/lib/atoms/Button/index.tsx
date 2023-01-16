import { PropsWithChildren } from 'react'
import { styled } from '../../../theme/stitches.config'
import { IButtonProps } from './types'

const StyledButton = styled('button', {
  borderRadius: '$3',
  cursor: 'pointer',
  border: 'none',
  fontFamily: '$sans',
  fontWeight: 600,
  lineHeight: '1.5em',

  '&:hover': {
    opacity: 0.9
  },

  '&:disabled': {
    backgroundColor: '$gray6',
    color: '$gray11'
  },

  variants: {
    size: {
      xs: {
        fontSize: '$1',
        padding: '$1 $2'
      },
      sm: {
        fontSize: '$2',
        padding: '$1 $2'
      },
      md: {
        fontSize: '$3',
        padding: '$2 $3'
      },
      lg: {
        fontSize: '$4',
        padding: '$2 $3'
      }
    },

    variant: {
      cancel: {
        backgroundColor: '$gray2',
        color: '$gray11',
        '&:not([disabled])': {
          border: '1px solid $gray8'
        }
      },
      primary: {
        backgroundColor: '$primary',
        color: '$primaryText'
        // '&:hover': {
        //   backgroundColor: '$primaryLighten1',
        // },
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$secondaryText'
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export function Button({
  children,
  ...props
}: PropsWithChildren<IButtonProps>) {
  return <StyledButton {...props}>{children}</StyledButton>
}
