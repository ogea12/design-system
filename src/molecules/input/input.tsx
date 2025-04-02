import type { FunctionComponent } from 'react'

import { Field as ArkField } from '@ark-ui/react/field'

import { Field } from '../../atoms'

export interface InputProps extends ArkField.RootBaseProps {
  /**
   * The label of the input.
   */
  label?: string

  /**
   * The type of the input.
   */
  type?: ArkField.InputProps['type']

  /**
   * The placeholder of the input.
   */
  placeholder?: string

  /**
   * Indicates whether the input is required.
   */
  required?: boolean

  /**
   * Indicates whether the input is disabled.
   */
  disabled?: boolean

  /**
   * The text to display when an error occurs.
   */
  errorText?: string

  /**
   * The text to display to help users.
   */
  helperText?: string
}

/**
 * An `Input` component with standardized label for form input, validation and other things.
 */
export const Input: FunctionComponent<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  ...rest
}) => {
  return (
    <Field {...rest}>
      {label && (
        <ArkField.Label className="text-(sm neutral-700) font-(medium sans)">
          {label}
          <ArkField.RequiredIndicator className="ml-1 text-danger-700">
            *
          </ArkField.RequiredIndicator>
        </ArkField.Label>
      )}
      <ArkField.Input
        className="border border-neutral-300 rounded-lg px-4 py-2 text-(sm neutral-700) font-sans outline-none transition-colors disabled:(cursor-not-allowed border-neutral-200 bg-neutral-200 text-neutral-500) data-[invalid]:border-danger-700 focus:border-duck-300 hover:border-duck-300 placeholder:text-neutral-500"
        placeholder={placeholder}
        type={type}
      />
    </Field>
  )
}
