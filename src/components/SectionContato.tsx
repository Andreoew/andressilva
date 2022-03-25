import React, { useRef, useState } from "react";
import * as yup from "yup";
import { Form } from "@unform/web";
import Input from "./Form/input";
import Textarea from "./Form/textarea";
import type { FormHandles } from "@unform/core";
import { Button } from "./Button";
import "../styles/sectionContato.scss";
import escritorio from "../assets/escritorio.jpg";
import "../styles/form.scss";



export function SectionContato() {


    const formRef = useRef<FormHandles>(null)


    async function handleSubmit(data: string, { reset }: any) {

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


        <div id="section" >
            <aside>
                <div className="container-a">
                    <div className="titulo-contato">
                        <h1>Agradecemos o seu contato</h1><br></br>
                        <></><div>
                            <h2>Estamos prontos para ajudar em suas necessidades jurídicas</h2><br></br>
                        </div>

                    </div>
                    <div>

                        <Form ref={formRef} onSubmit={handleSubmit} method="POST" >
                            <Input id="name" label="nome" name="name" placeholder="Nome completo" />
                            {/* <Input name="secret" type="hidden" value="teste" /> */}
                            <Input label="email" name="email" type="email" placeholder="Seu email" />
                            <Input
                                label="Telefone"
                                name="telefone"
                                type="telefone"
                                placeholder="Ex: XX-XXXXX-XXXX"
                                pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                            />
                            <Input label="assunto" name="assunto" type="assunto" placeholder="Qual assunto?..."></Input>
                            <Textarea label="mensagem" name="mensagem" type="mensagem" placeholder="Escreva sua mensagem..."></Textarea>

                            <Button>Enviar</Button>
                        </Form>
                    </div>

                </div>
                <div className="container-b">

                    <div className="escritorio">
                        <img src={escritorio} alt="Escritório" />
                    </div>

                </div>
            </aside>

        </div>


    )
}

function getUser(data: string, arg1: { name: void; email: any; }) {
    throw new Error("Function not implemented.");
}
