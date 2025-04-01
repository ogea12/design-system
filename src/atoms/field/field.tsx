import type { FunctionComponent, ReactNode } from 'react'

import { Field as ArkField } from '@ark-ui/react/field'
import { useEffect, useState } from 'react'

export interface FieldProps {
  /** The content that will be displayed inside the field. */
  children: ReactNode

  /** The indicator to signify that the field is disabled. */
  disabled?: boolean

  /** The text to display when an error has occurred. */
  errorText?: string

  /** The text to display to help users. */
  helperText?: string
}

/**
 * A `Field` component for form inputs with error and helper text support.
 */
export const Field: FunctionComponent<FieldProps> = ({
  children,
  disabled = false,
  errorText,
  helperText,
}) => {
  const [invalid, setInvalid] = useState(false)

  useEffect(() => {
    setInvalid(typeof errorText !== 'undefined')
  }, [errorText])

  return (
    <ArkField.Root className="flex flex-col gap-y-1" disabled={disabled} invalid={invalid}>
      {children}
      <ArkField.ErrorText className="text-(2xs danger-700) font-sans">
        {errorText}
      </ArkField.ErrorText>
      {!errorText && helperText && (
        <ArkField.HelperText className="text-(2xs neutral-600) font-sans">
          {helperText}
        </ArkField.HelperText>
      )}
    </ArkField.Root>
  )
}
