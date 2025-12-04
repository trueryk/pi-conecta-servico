$(document).ready(function () {

    let currentUser = JSON.parse(localStorage.getItem('currUser')) || [];

    if (currentUser == 0) {
        $('#navbar-site-ul').append(
            `
            <li class="mx-2 mb-1">|</li>
                    <li class="nav-item">
                        <a class="nav-link" href="cadastro.html">Cadastrar</a>
                    </li>
                    <li class="mx-2 mb-1">|</li>
                    <li class="nav-item">
                        <a class="nav-link" href="entrar.html">Entrar</a>
                    </li>
        `)

    } else {
        let currentUser = JSON.parse(localStorage.getItem('currUser'));
        if (currentUser.tipo == 'Cliente') {
            $('#navbar-site-ul').append(`
            <li class="mx-2 mb-1">|</li>
                    <li class="nav-item">
                        <a class="nav-link" href="contratados.html">Meus contratos</a>
                    </li>
                    <li class="mx-2 mb-1">|</li>
                    <li class="nav-item">
                        <a class="nav-link" href="logout.html">Logout</a>
                    </li>
            `)
        } else {
            $('#navbar-site-ul').append(`
            <li class="mx-2 mb-1">|</li>
                    <li class="nav-item">
                        <a class="nav-link" href="servicos.html">Meus serviços</a>
                    </li>
                    <li class="mx-2 mb-1">|</li>
                    <li class="nav-item">
                        <a class="nav-link" href="logout.html">Logout</a>
                    </li>
            `)
        }
    }
});

