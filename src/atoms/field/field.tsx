import type { FunctionComponent, ReactNode } from 'react'

import { Field as ArkField } from '@ark-ui/react/field'
import { useEffect, useState } from 'react'

export interface FieldProps extends Omit<ArkField.RootBaseProps, 'invalid'> {
  /**
   * The content of the field.
   */
  children: ReactNode

  /**
   * Indicates whether the field is required.
   */
  required?: boolean

  /**
   * Indicates whether the field is disabled.
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
 * A `Field` component for form inputs with error and helper text support.
 */
export const Field: FunctionComponent<FieldProps> = ({
  children,
  errorText,
  helperText,
  ...rest
}) => {
  const [invalid, setInvalid] = useState(false)

  useEffect(() => {
    setInvalid(typeof errorText !== 'undefined')
  }, [errorText])

  return (
    <ArkField.Root className="flex flex-col gap-y-1" invalid={invalid} {...rest}>
      {children}
      {errorText && (
        <ArkField.ErrorText className="text-(2xs danger-700) font-sans">
          {errorText}
        </ArkField.ErrorText>
      )}
      {!errorText && helperText && (
        <ArkField.HelperText className="text-(2xs neutral-600) font-sans">
          {helperText}
        </ArkField.HelperText>
      )}
    </ArkField.Root>
  )
}
