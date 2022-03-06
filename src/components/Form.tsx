import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "../styles/form.scss"
import { Button } from "./Button";
import { Contato } from "../pages/Contato";

type IFormInputs = {
    name: string,
    assunto: string,
    mensagem: string,
    email: string,
    tel: string,

}
let schema = yup.object({
    name: yup.string().required('O nome é obrigatório').min(3, 'Escreva o nome completo'),
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    tel: yup.string().required('O número de telefone é obrigatório'),
    assunto: yup.string().required('O assunto é obrigatório'),
    mensagem: yup.string().required('A sua mensagem é obrigatória').min(5, 'Escreva mais sobre o assunto...')
        .min(5, 'Escreva mais sobre o assunto...'),
    website: yup.string().url().nullable(),
    createdOn: yup.date().default(() => new Date()),
});



export default function Form() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IFormInputs) => console.log(data);


    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} method="POST" action="./email.php">
            <input
                type="name"
                placeholder="Seu nome completo"
                className="field"
                {...register("name")} />
            <p>{errors.name?.message}</p>

            <input
                type="email"
                placeholder="Seu e-mail"
                className="field"
                {...register("email")} />
            <p>{errors.email?.message}</p>

            <input
                type="tel"
                placeholder="Seu telefone - Ex: xx-xxxx-xxxx"
                pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                className="field"
                {...register("tel")} />
            <p>{errors.tel?.message}</p>
            <input
                type="assunto"
                placeholder="Qual assunto?"
                className="field"
                {...register("assunto")} />
            <p>{errors.assunto?.message}</p>
            <textarea

                id="mensagem"
                placeholder="Escreva sua mensagem aqui..."
                className="field"
                {...register("mensagem")}

            />
            <p>{errors.mensagem?.message}</p>

            <Button type="reset">Apagar</Button>
            <Button>Enviar</Button>


        </form>

    );
}
