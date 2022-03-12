import { useRef, useEffect, TextareaHTMLAttributes } from 'react'

import { useField, SubmitHandler, FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import React from 'react'

/**
 * Textarea component for Unform.
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
 */
interface Props {
    name: string
    type?: string
    | 'mensagem'
    label?: string
    value?: string
}




type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Props

export default function Textarea({ name, type, label, ...rest }: TextareaProps) {
    const textareaRef = useRef(null)
    const { fieldName, defaultValue = '', registerField, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: textareaRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField])


    return (
        <div>
            {label && <label htmlFor={fieldName}>{label}</label>}

            <textarea
                ref={textareaRef}
                id={fieldName}
                defaultValue={defaultValue}
                {...rest}
            />

            {error && <span>{error}</span>}
        </div>
    )
}


