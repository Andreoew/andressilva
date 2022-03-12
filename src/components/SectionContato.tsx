import "../styles/sectionContato.scss";
import escritorio from "../assets/escritorio.jpg";
// import Form from "./Form";
import React, { useRef } from "react";
import { Form } from "@unform/web";
import * as yup from "yup";
import Input from "../components/Form/input";
import { Button } from "./Button";
import type { FormHandles } from "@unform/core";
import Textarea from "./Form/textarea";



export function SectionContato() {
    const formRef = useRef<FormHandles>(null)




    async function handleSubmit(data: string, { reset }: any) {
        try {
            let schema = yup.object().shape({
                name: yup.string().required('O nome é obrigatório').min(3, 'Escreva o nome completo'),
                email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
                tel: yup.string().required('O número de telefone é obrigatório'),
                assunto: yup.string().required('O assunto é obrigatório'),
                mensagem: yup.string().required('A sua mensagem é obrigatória').min(5, 'Escreva mais sobre o assunto...')
                    .min(5, 'Escreva mais sobre o assunto...'),

                // createdOn: yup.date().default(() => new Date()),
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


        <div id="section">
            <aside>
                <div className="container-a">
                    <div className="titulo-contato">
                        <h1>Agradecemos o seu contato</h1><br></br>
                        <></><div>
                            <h2>Estamos prontos para ajudar em suas necessidades jurídicas</h2><br></br>
                        </div>

                    </div>
                    <div>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <Input label="nome" name="name" placeholder="Nome completo" />
                            {/* <Input name="secret" type="hidden" value="teste" /> */}
                            <Input label="email" name="email" type="email" placeholder="Seu email" />
                            <Input
                                label="Telefone"
                                name="tel"
                                type="tel"
                                placeholder="Ex: XX-XXXXX-XXXX"
                                pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                            />
                            <Input label="assunto" name="assunto" type="assunto" placeholder="Qual assunto?..."></Input>
                            <Textarea label="mensagem" name="mensagem" type="mensagem" placeholder="Escreva sua mensagem..."></Textarea>

                            <Button>Enviar</Button>
                        </Form>
                    </div>

                    {/* < Form /> */}

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