$(document).ready(function () {

    $('#meus-servicos-nav').addClass('active')

    function carregar_servicos_current_user() {
        let id_prestador = -1;
        let currentUser = JSON.parse(localStorage.getItem('currUser'));
        let user = JSON.parse(localStorage.getItem('user')) || [];
        user.forEach((user, id) => {
            if (currentUser.email == user.email) {
                id_prestador = id;
            }
        });

        let count = 0;
        let servico = JSON.parse(localStorage.getItem('serv')) || [];
        servico.forEach((servico, i) => {
            if (servico.id_prestador == id_prestador) {
                count += 1;
                if (servico.status) {
                    $('#current-user-services').append(`
                    <li class="mb-3">
                    <article class="card card-3d h-100 py-2">
                        <div class="card-body d-flex gap-3">
                            <div class="avatar-3d bg-ink text-white fw-bold">${servico.nome[0]}</div>
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between">
                                    <h3 class="h6 mb-1 lead"> ${servico.nome} <i class="bi bi-dash text-black"></i>
                                        <span class="badge tag-3d bg-body border text-secondary"> ${servico.tipo}
                                        </span>
                                    </h3>
                                    <span
                                        class="badge bg-success-subtle text-success border d-flex align-items-center"><span>Ativo</span></span>
                                </div>
                                <p class="mt-2 text-secondary">
                                    ${servico.descricao}
                                </p>
                                <br>
                                <div class="d-flex gap-2">
                                    <a class="btn btn-service text-white" href="#" data-id="${i}">Avaliações</a>
                                    <a class="btn btn-service text-white" href="" data-id="${i}">Editar serviço</a>
                                    <p class="end-0 pe-5 pt-2 position-absolute">${servico.valor}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </li>
                    `)
                } else {
                    $('#current-user-services').append(`
                    <li class="mb-3">
                    <article class="card card-3d h-100 py-2">
                        <div class="card-body d-flex gap-3">
                            <div class="avatar-3d bg-ink text-white fw-bold">${servico.nome[0]}</div>
                            <div class="flex-grow-1">
                                <div class="d-flex justify-content-between">
                                    <h3 class="h6 mb-1 lead"> ${servico.nome} <i class="bi bi-dash text-black"></i>
                                        <span class="badge tag-3d bg-body border text-secondary"> ${servico.tipo}
                                        </span>
                                    </h3>
                                    <span
                                        class="badge bg-warning-subtle text-warning border d-flex align-items-center"><span>Inativo</span></span>
                                </div>
                                <p class="mt-2 text-secondary">
                                    ${servico.descricao}
                                </p>
                                <br>
                                <div class="d-flex gap-2">
                                    <a class="btn btn-service text-white" href="#" data-id="${i}">Avaliações</a>
                                    <a class="btn btn-service text-white" href="" data-id="${i}">Contratar serviço</a>
                                    <p class="end-0 pe-5 pt-2 position-absolute">${servico.valor}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </li>
                    `)
                }
            }
        });
        if (count == 0) {
            $('#current-user-services').append(
                `
                 <li class="text-center text-secondary fs-4">
                        Não há serviços cadastrados
                </li>
                <li class="text-center text-secondary fs-4">
                        ...
                </li>
                `
            )
        }
    }
    carregar_servicos_current_user();
});