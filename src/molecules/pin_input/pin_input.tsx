import type { FunctionComponent } from 'react'

import { Field as ArkField } from '@ark-ui/react/field'
import { PinInput as ArkPinInput } from '@ark-ui/react/pin-input'
import { useEffect, useState } from 'react'

import { Field } from '../../atoms'

export interface PinInputProps extends Omit<ArkPinInput.RootBaseProps, 'invalid'> {
  /**
   * The number of inputs to render.
   */
  count: number

  /**
   * The label of the pin input.
   */
  label?: string

  /**
   * The placeholder of the pin input.
   */
  placeholder?: string

  /**
   * Indicates whether the pin input is required.
   */
  required?: boolean

  /**
   * Indicates whether the pin input is disabled.
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
 * A `PinInput` component with standardized label for form pin input, validation and other things.
 */
export const PinInput: FunctionComponent<PinInputProps> = ({
  count,
  label,
  placeholder = '0',
  required,
  disabled,
  errorText,
  helperText,
  ...rest
}) => {
  const [invalid, setInvalid] = useState(false)

  useEffect(() => {
    setInvalid(typeof errorText !== 'undefined')
  }, [errorText])

  return (
    <Field disabled={disabled} errorText={errorText} helperText={helperText} required={required}>
      <ArkPinInput.Root
        className="flex flex-col gap-y-1"
        invalid={invalid}
        placeholder={placeholder}
        {...rest}
      >
        {label && (
          <ArkPinInput.Label className="text-(sm neutral-700) font-(medium sans)">
            {label}
            <ArkField.RequiredIndicator className="ml-1 text-danger-700">
              *
            </ArkField.RequiredIndicator>
          </ArkPinInput.Label>
        )}
        <ArkPinInput.Control
          className="grid gap-x-4"
          style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: count }).map((_, index) => (
            <ArkPinInput.Input
              className="border border-neutral-300 rounded-lg px-4 py-2 text-(center sm neutral-700) font-sans outline-none transition-colors disabled:(cursor-not-allowed border-neutral-200 bg-neutral-200 text-neutral-500) data-[invalid]:border-danger-700 focus:border-duck-300 hover:border-duck-300 placeholder:text-neutral-500"
              index={index}
              key={index}
            />
          ))}
        </ArkPinInput.Control>
        <ArkPinInput.HiddenInput />
      </ArkPinInput.Root>
    </Field>
  )
}
