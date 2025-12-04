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

    // function login_verified(email, senha) {
    //     let user = JSON.parse(localStorage.getItem('user')) || [];
    //     user.forEach((user, i) => {
    //         if (user.email == email && user.senha == senha) {
    //             let currentUser = JSON.parse(localStorage.getItem('currUser')) || [];
    //             currentUser = user;
    //             localStorage.setItem('currUser', JSON.stringify(currentUser));
    //         }
    //     });
    // }

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


//     function load() {
//         let user = JSON.parse(localStorage.getItem('user')) || [];
//         $('#listUsers').empty();

//         user.forEach((user, i) => {
//             $('#listUsers').append(`
//                 <li class="list-group-item d-flex justify-content-between align-items-center mt-4 mb-5 ">
//                         <div class="col-12 pe-3">
//                             <strong>${user.nome}</strong>
//                             <small class="position-absolute end-0 me-3">${user.data}</small>
//                             <br>
//                             <div class="row">
//                                 <div class="col-8">
//                                     <small>${user.email}</small>
//                                 </div>
//                                 <div class="buttons col-4 position-relative d-flex justify-content-end">
//                                     <button class="btn btn-sm btn-dark editar me-2  " data-id="${i}"><i
//                                             class="bi bi-pencil"></i></button>
//                                     <button class="btn btn-sm btn-danger excluir" data-id="${i}"><i
//                                             class="bi bi-trash"></i></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </li>
//                 `);
//         });
//     }

//     $('#registerBtn').click(function () {
//         let nome = $('#userName').val().trim()
//         let email = $('#userEmail').val().trim()
//         let data = $('#dataNasc').val()
//         if (!nome || !email || !data) {
//             $('#liveFailed > .toast-header > small').html(`${date.getHours()}:${date.getMinutes()}`)
//             toastFailed.show()
//         } else {
//             $('#liveSuccess > .toast-header > small').html(`${date.getHours()}:${date.getMinutes()}`)
//             $('#liveSuccess > .toast-body').html(`O usuário ${nome} foi cadastrado ao sistema!`)
//             toastSuccess.show()
//             let user = JSON.parse(localStorage.getItem('user')) || [];
//             user.push({ nome, email, data });
//             localStorage.setItem('user', JSON.stringify(user));
//             $('#modalRegister').modal('hide')
//             load()
//         }
//     });

//     $('#editBtn').click(function () {
//         let nome = $('#userNameEdit').val().trim()
//         let email = $('#userEmailEdit').val().trim()
//         let data = $('#dataNascEdit').val()
//         let id = $('#editBtn').attr('data-id')
//         if (!nome || !email || !data) {
//             $('#liveFailed > .toast-header > small').html(`${date.getHours()}:${date.getMinutes()}`)
//             toastFailed.show()
//         } else {
//             $('#liveSuccess > .toast-header > small').html(`${date.getHours()}:${date.getMinutes()}`)
//             $('#liveSuccess > .toast-body').html(`O usuário ${nome} teve suas informações alteradas!`)
//             toastSuccess.show()
//             let user = JSON.parse(localStorage.getItem('user')) || [];
//             user[id] = { nome: nome, email: email, data: data };
//             localStorage.setItem('user', JSON.stringify(user));
//             $('#modalEdit').modal('hide')
//             load()
//         }
//     });

//     $(document).on('click', '.excluir', function () {
//         let id = $(this).data('id');
//         let user = JSON.parse(localStorage.getItem('user')) || [];
//         user.splice(id, 1);
//         localStorage.setItem('user', JSON.stringify(user));
//         load()
//     });

//     $(document).on('click', '.editar', function () {
//         let id = $(this).data('id');
//         let user = JSON.parse(localStorage.getItem('user')) || [];
//         let old = user[id];

//         $('#modalEdit').modal('show');
//         $('#editBtn').attr('data-id', id)
//         $('#modalEditLabel').html(`Editar usuário ${old.nome}`);
//         $('#userNameEdit').val(`${old.nome}`)
//         $('#userEmailEdit').val(`${old.email}`)
//         $('#dataNascEdit').val(`${old.data}`)
//     });

//     $(document).on('click', '#popularBtn', function () {
//         let user = JSON.parse(localStorage.getItem('user')) || [];
//         user.push({ nome: 'Sebastian', email: 'bikeboydev@gmail.com', data: '2004-11-10' });
//         localStorage.setItem('user', JSON.stringify(user));
//         user.push({ nome: 'Halley', email: 'vangoghyellow@gmail.com', data: '2004-02-14' });
//         localStorage.setItem('user', JSON.stringify(user));
//         user.push({ nome: 'Elliot', email: 'beachwriter@gmail.com', data: '2004-07-05' });
//         localStorage.setItem('user', JSON.stringify(user));
//         user.push({ nome: 'Sam', email: 'jojask8boy@gmail.com', data: '2004-05-17' });
//         localStorage.setItem('user', JSON.stringify(user));
//         user.push({ nome: 'Alex', email: 'football@gmail.com', data: '2004-05-13' });
//         localStorage.setItem('user', JSON.stringify(user));
//         user.push({ nome: 'Penny', email: 'pelicantownteacher@gmail.com', data: '2004-07-02' });
//         localStorage.setItem('user', JSON.stringify(user));
//         user.push({ nome: 'Emily', email: 'good4i20vibes@gmail.com', data: '2004-03-27' });
//         localStorage.setItem('user', JSON.stringify(user));
//         load()
//     })
//     load()
// });

// $('#modalRegister').on('hidden.bs.modal', event => {
//     $('#modalRegisterLabel').html('Cadastrar usuário');
//     $('#userName').val('')
//     $('#userEmail').val('')
//     $('#dataNasc').val('')
// })