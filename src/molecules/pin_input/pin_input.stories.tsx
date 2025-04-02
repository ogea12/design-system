import type { Meta, StoryObj } from '@storybook/react'

import { PinInput } from './pin_input'

const meta = {
  title: 'Molecules/PinInput',
  component: PinInput,
} satisfies Meta<typeof PinInput>

type Story = StoryObj<typeof meta>

export const Label: Story = {
  args: { label: 'Label', count: 4 },
}

export const DefaultValue: Story = {
  args: { label: 'Label', defaultValue: ['1', '2', '3'], count: 4 },
}

export const Required: Story = {
  args: { label: 'Label', required: true, count: 4 },
}

export const Disabled: Story = {
  args: { label: 'Label', disabled: true, count: 4 },
}

export const ErrorText: Story = {
  args: { label: 'Label', errorText: 'Error text', count: 4 },
}

export const HelperText: Story = {
  args: { label: 'Label', helperText: 'Helper text', count: 4 },
}

export default meta
