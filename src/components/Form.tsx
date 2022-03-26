import React, { FormEvent, useRef, useState } from "react";
import * as yup from "yup";
import Input from "./Form/input";
import Textarea from "./Form/textarea";
import type { FormHandles } from "@unform/core";
import { Button } from "./Button";
import { Form } from "@unform/web";



export function Formulario() {

    const formRef = useRef<FormHandles>(null)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');



    async function handleSubmit(data: string, { reset }: any, event: FormEvent) {
        event.preventDefault();
        try {

            const schema = yup.object().shape({
                name: yup.string().required('O nome é obrigatório').min(3, 'Escreva o nome completo'),
                email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
                telefone: yup.string().required('O número de telefone é obrigatório'),
                assunto: yup.string().required('O assunto é obrigatório'),
                mensagem: yup.string().required('A sua mensagem é obrigatória').min(5, 'Escreva mais sobre o assunto...')
                    .min(5, 'Escreva mais sobre o assunto...'),

                createdOn: yup.date().default(() => new Date()),
            });

            await schema.validate(data, {
                abortEarly: false,
            })

            console.log(data);


            formRef?.current?.setErrors({});

            reset();
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                const errorMessages: Record<string, string> = {}

                err.inner.forEach(error => {
                    errorMessages[error.path as string] = error.message;
                })

                formRef?.current?.setErrors(errorMessages);
            }
        }
    }

    return (
        <div className="Formulario">
            <Form ref={formRef} onSubmit={handleSubmit} >
                <Input id="name" label="nome" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Nome completo" />
                {/* <Input name="secret" type="hidden" value="teste" /> */}
                <Input id="email" label="email" name="email" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Seu email" />
                <Input
                    label="Telefone"
                    name="telefone"
                    type="telefone"
                    value={telefone} onChange={e => setTelefone(e.target.value)}
                    placeholder="Ex: XX-XXXXX-XXXX"
                // pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                />
                <Input label="assunto" name="assunto" type="assunto" value={assunto} onChange={e => setAssunto(e.target.value)} placeholder="Qual assunto?..."></Input>
                <Textarea label="mensagem" name="mensagem" type="mensagem" value={mensagem} onChange={e => setMensagem(e.target.value)} placeholder="Escreva sua mensagem..."></Textarea>

                <Button>Enviar</Button>
            </Form>
        </div>
    );

}
export default Form;




