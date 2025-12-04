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
                        <a class="nav-link" href="contratados.html"><i class="bi bi-list"></i>Meus contratos</a>
                    </li>
                    <li class="mx-2 mb-1">|</li>
                    <li class="nav-item">
                        <a id="logout-btn" class="nav-link"><i class="bi bi-box-arrow-left"></i>Logout</a>
                    </li>
            `)
        } else {
            $('#navbar-site-ul').append(`
            <li class="mx-2 mb-1">|</li>
                    <li class="nav-item">
                        <a id="cadastro-servicos-nav" class="nav-link" href="servicos.html"><i class="bi bi-plus-lg"></i>Cadastrar Serviço</a>
                    </li>
                    <li class="mx-2 mb-1">|</li>
                    <li class="nav-item">
                        <a id="meus-servicos-nav" class="nav-link" href="meusservicos.html"><i class="bi bi-list"></i>Meus serviços</a>
                    </li>
                    <li class="mx-2 mb-1">|</li>
                    <li class="nav-item">
                        <a id="logout-btn" class="nav-link"><i class="bi bi-box-arrow-left"></i>Logout</a>
                    </li>
            `)
        }
    }

    function carregar_servicos() {
        let servicos = JSON.parse(localStorage.getItem('serv')) || [];
        if (servicos == 0) {
            $('#servico-lista-home').append(
                `
                <li class="text-center text-secondary fs-4">
                        Não há serviços cadastrados
                </li>
                <li class="text-center text-secondary fs-4">
                        ...
                </li>
                    `
            )
        } else {
            let servicos = JSON.parse(localStorage.getItem('serv')) || [];
            servicos.forEach((servico, i) => {
                $('#servico-lista-home').append(
                    `
 <li class="mb-3" >
            <article class="card card-3d h-100 py-2">
                <div class="card-body d-flex gap-3">
                    <div class="avatar-3d bg-ink text-white fw-bold">${servico.nome[0]}</div>
                    <div class="flex-grow-1">
                        <div class="d-flex justify-content-between">
                            <h3 class="h6 mb-1 lead"> ${servico.nome} <i class="bi bi-dash text-black"></i> <span
                                class="badge tag-3d bg-body border text-secondary"> ${servico.tipo} </span>
                            </h3>
                            <span
                                class="badge bg-success-subtle text-success border d-flex align-items-center"><span>Verificado</span></span>
                        </div>
                        <p class="mt-2 text-secondary">
                            ${servico.descricao}
                        </p>
                        <br>
                            <div class="d-flex gap-2">
                                <a class="btn btn-service text-white" href="#" data-id="${i}">Avaliações</a>
                                <a class="btn btn-service text-white" href="" data-id="${i}">Contratar serviço</a>
                            </div>
                    </div>
                </div>
            </article>
        </li >
`
                )
            });
            $('#servico-lista-home').append(
                `
            <li class="text-center text-secondary fs-4">
                        ...
                </li>
            `
            )
        }
    }

    $('#logout-btn').click(function () {
        let currentUser = JSON.parse(localStorage.getItem('currUser')) || [];
        currentUser = [];
        localStorage.setItem('currUser', JSON.stringify(currentUser));
        reload();
    });
    carregar_servicos();
});

