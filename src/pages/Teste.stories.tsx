import { Meta, StoryObj} from '@storybook/react';
import { Teste } from "./Teste";
import {within, userEvent, waitFor} from '@storybook/testing-library'
import {expect} from '@storybook/jest'

export default {
  title: 'Pages/Teste',
  component: Teste,
} as Meta
  
export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.click(canvas.getByTestId('clicar'))

        await waitFor(() => {
          expect(canvas.getByText('testado')).toBeInTheDocument()
        })
    } 
}