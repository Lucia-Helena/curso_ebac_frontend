$(document).ready(function(){

    $('#telefone').mask('(00) 0000-0000');

    $('#cpf').mask('000.000.000-00', {reverse: true});

    $('#cep').mask('00000-000');

    $('#email').mask('A', {
        translation: {
          'A': { pattern: /[\w@\-.+]/, recursive: true }
        }
      });

  });
