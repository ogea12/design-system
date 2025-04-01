import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta = {
  title: 'Molecules/Input',
  component: Input,
  argTypes: {
    type: {
      type: 'string',
    },
  },
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Label: Story = {
  args: { label: 'Label', placeholder: 'Placeholder' },
}

export const Required: Story = {
  args: { label: 'Label', required: true, placeholder: 'Placeholder' },
}
export const Disabled: Story = {
  args: { label: 'Label', disabled: true, placeholder: 'Placeholder' },
}

export const ErrorText: Story = {
  args: { label: 'Label', errorText: 'Error text', placeholder: 'Placeholder' },
}

export const HelperText: Story = {
  args: { label: 'Label', helperText: 'Helper text', placeholder: 'Placeholder' },
}

export default meta
