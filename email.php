<?php

if(isset($_POST['email']) && !empty($_POST['email'])){

$nome = addslashes($_POST['nome']);
$endereco = addslashes($_POST['endereco']);
$cidade = addslashes($_POST['cidade']);
$telefone = addslashes($_POST['telefone']);
$email= addslashes($_POST['email']);
$mensagem = addslashes($_POST['message']);

$to = "contato@andressilva.com.br";
$subject = "Contato - Adss";
$body = "Nome: ".$nome. "\r\n".
        "Endereco: ".$endereco. "\r\n".
        "Cidade: ".$cidade. "\r\n".
        "Telefone: ".$telefone. "\r\n".
        "Email: ".$email. "\r\n".
        "Mensagem: ".$mensagem;

$header = "From:contato@andressilva.com.br"."\r\n".
            "Reply-To:".$email."\e\n".
            "x=Mailer:PHP/".phpversion();

            
if(mail($to,$subject,$body,$header)){
    echo("$nome, O Email enviado com sucesso!");
    

}else{
    echo("$nome, O Email não pode ser enviado");
}
}

           




?>