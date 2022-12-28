import { IButtonProps } from "./types";
import { styled } from "../ThemeProvider/stitches.config";

const StyledButton = styled('button', {
    borderRadius: '$3',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 600,
    lineHeight: '1.5em',
  
    '&:hover': {
      opacity: 0.9,
    },
  
    '&:disabled': {
      backgroundColor: '$gray6',
      color: '$gray11',
    },
    backgroundColor: '$primary',
    color: '$primaryText',
    fontSize: '$3',
    padding: '$2 $3',
   
  })

export function Button({children}: IButtonProps) {
    return (
        <StyledButton>{children}</StyledButton>
    )
}