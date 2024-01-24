$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {
        placeholder:'ex: 000.000.000-00'
        placeholder:'CPF: 000.000.000-00'
    })
    $('#cep').mask('00000-000', {
        placeholder:'ex: 00000-00'
        placeholder:'CEP (ex: 00000-00)'
    })
    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'ex: (99) 99999-9999'
        placeholder:'Celular:(99) 99999-9999 '
    })
})
