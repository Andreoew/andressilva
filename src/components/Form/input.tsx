// import { useRef, useEffect, InputHTMLAttributes } from 'react'
import { useRef, useEffect, InputHTMLAttributes } from 'react'

import { useField, SubmitHandler, FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import React from 'react'


interface Props {
    name: string
    type?:
    | 'text'
    | 'number'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'hidden'
    | 'month'
    | 'password'
    | 'time'
    | 'range'
    | 'search'
    | 'tel'
    | 'url'
    | 'week'
    | 'assunto'
    | 'mensagem'
    | 'bio'
    label?: string
    value?: string
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props

export default function Input({ name, type, label, value, ...rest }: InputProps) {
    const inputRef = useRef(null)
    const { fieldName, defaultValue, registerField, error } = useField(name)

    const defaultInputValue = value || defaultValue

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, newValue) => {
                ref.current.value = newValue
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField])


    return (
        <div>
            <label htmlFor={fieldName}>{label}</label>

            <input
                type={type || 'text'}
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultInputValue}
                {...rest}
            />
            <br />

            {error && <span>{error}</span>}
        </div>
    );
}
