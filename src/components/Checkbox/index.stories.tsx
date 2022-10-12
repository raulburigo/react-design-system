import { Meta, StoryObj} from '@storybook/react';
import { Checkbox } from ".";
import { Text } from '../Text';

export default {
    title: 'Components/Checkbox',
    component: Checkbox   
} as Meta

export const Default: StoryObj = {}

export const WithText: StoryObj = {
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'>Lembrar de mim por trinta dias</Text>
                </div>
            )
        }
    ]
}