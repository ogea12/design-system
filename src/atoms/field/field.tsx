import type { ReactNode } from 'react'

import { Field as ArkField } from '@ark-ui/react/field'
import { useEffect, useState } from 'react'

export interface FieldProps {
  /** The content that will be displayed inside the field. */
  children: ReactNode

  /** The text to display when an error has occurred. */
  errorText?: string

  /** The text to display to help users. */
  helperText?: string
}

/**
 * A `Field` component for form inputs with error and helper text support.
 */
export function Field(props: FieldProps) {
  const { children, errorText, helperText } = props

  const [invalid, setInvalid] = useState(false)

  useEffect(() => {
    setInvalid(typeof errorText !== 'undefined')
  }, [errorText])

  return (
    <ArkField.Root invalid={invalid}>
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
