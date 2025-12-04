$(document).ready(function () {

    let campo_nome = $('#nome');
    let campo_email = $('#user-email');
    let campo_telefone = $('#telefone');
    let campo_senha = $('#senha');


    campo_telefone.mask('(00) 00000-0000');

    function cadastroUser(nome, email, telefone, senha, tipo) {
        let user = JSON.parse(localStorage.getItem('user')) || [];
        user.push({ 'nome': nome, 'email': email, 'telefone': telefone, 'senha': senha, 'tipo': tipo });
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'index.html';
    }

    function login(email) {
        let user = JSON.parse(localStorage.getItem('user')) || [];
        user.forEach((user, i) => {
            if (user.email == email) {
                let currentUser = JSON.parse(localStorage.getItem('currUser')) || [];
                currentUser = user;
                localStorage.setItem('currUser', JSON.stringify(currentUser));
            }
        });
    }


    $('#btnLogin').click(function login_verified() {
        let count = 0;
        let email = $('#user-email').val().trim()
        let senha = $('#senha').val()
        let user = JSON.parse(localStorage.getItem('user')) || [];
        user.forEach((user, i) => {
            if (user.email == email && user.senha == senha) {
                let currentUser = JSON.parse(localStorage.getItem('currUser')) || [];
                currentUser = user;
                localStorage.setItem('currUser', JSON.stringify(currentUser));
                count+=1;
            }
        });
        if (count == 1) {
            window.location.href = 'index.html';
        } else {
            $('#senha').val('');
        }
    })
    

    $('#check-terms').click(function () {
        if ($('#check-terms').is(':checked') == true) {
            $('#btnCliente').removeAttr('disabled')
            $('#btnPrestador').removeAttr('disabled')
        } else {
            $('#btnCliente').attr('disabled', true)
            $('#btnPrestador').attr('disabled', true)
        }
    });

    $('#btnCliente').click(function () {
        if (campo_nome.is(':valid') &&
            campo_email.is(':valid') &&
            campo_telefone.is(':valid') &&
            campo_senha.is(':valid')) {
            let tipo = 'Cliente';
            let nome = campo_nome.val()
            let email = campo_email.val().trim()
            let telefone = campo_telefone.val()
            let senha = campo_senha.val().trim();
            cadastroUser(nome, email, telefone, senha, tipo)
            login(email)
        }
    });

    $('#btnPrestador').click(function () {
        if (campo_nome.is(':valid') &&
            campo_email.is(':valid') &&
            campo_telefone.is(':valid') &&
            campo_senha.is(':valid')) {
            let tipo = 'Prestador';
            let nome = campo_nome.val()
            let email = campo_email.val().trim()
            let telefone = campo_telefone.val()
            let senha = campo_senha.val().trim();
            cadastroUser(nome, email, telefone, senha, tipo)
            login(email)
        }
    });

})