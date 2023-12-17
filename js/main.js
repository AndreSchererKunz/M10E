$(document).ready(function (){

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo',
            telefone: 'Por favor, insira o número do seu telefone',
            email: 'Por favor, insira o seu e-mail',
            cpf: 'Por favor, insira o seu CPF',
            endereco: 'Por favor, insira o seu endereço completo',
            cep: 'Por favor, insira o seu CEP'
        },
        submitHandler: function(form) {
            if ($(form).valid()) {
                alert('Cadastro realizado com sucesso!');
                form.reset();
            }
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

})