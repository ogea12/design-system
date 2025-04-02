import type { Meta, StoryObj } from '@storybook/react'

import { Field } from './field'

const meta = {
  title: 'Atoms/Field',
  component: Field,
  args: {
    children: <div />,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Field>

type Story = StoryObj<typeof meta>

export const ErrorText: Story = {
  args: { errorText: 'Error text' },
}

export const HelperText: Story = {
  args: { helperText: 'Helper text' },
}

export default meta
