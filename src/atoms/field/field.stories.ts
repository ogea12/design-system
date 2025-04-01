import type { Meta, StoryObj } from '@storybook/react'

import { createElement } from 'react'

import { Field } from './field'

const meta = {
  title: 'Atoms/Field',
  component: Field,
  args: { children: createElement('div') },
  argTypes: { children: { table: { disable: true } } },
} satisfies Meta<typeof Field>

type Story = StoryObj<typeof meta>

export const WithErrorText: Story = {
  args: { errorText: 'Error text' },
}

export const WithHelperText: Story = {
  args: { helperText: 'Helper text' },
}

export default meta
