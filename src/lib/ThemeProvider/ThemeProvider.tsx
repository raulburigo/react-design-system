import React, { createContext, PropsWithChildren, useMemo } from 'react'
import { createTheme, styled } from './stitches.config'
import { IThemeProps } from './types'

const ThemeContext = createContext({})

const ThemeContainer = styled('div', {})

const ThemeProvider: React.FC<PropsWithChildren<IThemeProps>> = ({
  children,
  colors: clientColors,
}) => {
  const clientTheme = useMemo(
    () =>
      createTheme({
        colors: {
          ...clientColors,
        },
      }),
    [clientColors],
  )

  return (
    <ThemeContext.Provider value={{}}>
      <ThemeContainer className={clientTheme}>{children}</ThemeContainer>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
