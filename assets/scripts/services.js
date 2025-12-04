$(document).ready(function () {

    campo_nome = $('#nome');
    campo_tipo = $('#service-tipo');
    campo_descricao = $('#descricao');
    campo_valor = $('#valor');


    const categorias = [
        'Diarista',
        'Faxineiro(a)',
        'Cozinheiro(a)',
        'Jardineiro(a)',
        'Pedreiro',
        'Pintor',
        'Eletricista',
        'Encanador',
        'Marceneiro',
        'Vidraceiro',
        'Serralheiro',
        'Chaveiro',
        'Desentupidor',
        'Dedetizador',
        'Montador de móveis',
        'Organizador profissional',
        'Personal organizer',
        'Babá de animais',
        'Adestrador de cães',
        'Veterinário',
        'Tosador (Pet)',
        'Cuidador de idosos',
        'Enfermeiro(a)',
        'Fisioterapeuta',
        'Técnico de informática',
        'Programador',
        'Designer gráfico',
        'Fotógrafo',
        'Cinegrafista',
        'Maquiador(a)',
        'Cabeleireiro(a)',
        'Manicure',
        'Barbeiro',
        'Esteticista',
        'Massoterapeuta',
        'Personal trainer',
        'Professor particular',
        'Instrutor de música',
        'Tradutor',
        'Advogado',
        'Contador',
        'Arquiteto',
        'Engenheiro',
        'Motorista particular',
        'Entregador',
        'Mudanças',
        'Mecânico',
        'Lavador de carros',
        'Organizador de eventos',
        'Buffet'
    ];


    let currentUser = JSON.parse(localStorage.getItem('currUser')) || [];
    $('#nome').val(currentUser.nome)

    categorias.forEach(categorias => {
        $('.form-select').append(`
        <option value="${categorias}"> ${categorias} </option>
        `)
    });

    campo_valor.unmask();
    campo_valor.mask('#.##0,00', { reverse: true });

    function get_id() {
        let id = -1;
        let currentUser = JSON.parse(localStorage.getItem('currUser')) || [];
        let user = JSON.parse(localStorage.getItem('user')) || [];
        user.forEach((user, i) => {
            if (user.email == currentUser.email) {
                id = i;
            }
        });
        return id;
    }

    function cadastro_servico(nome, tipo, descicao, valor, id_prestador) {

    }

    $('#btnCliente').click(function () {
        if (campo_nome.is(':valid') &&
            campo_tipo.is(':valid') &&
            campo_descricao.is(':valid') &&
            campo_valor.is(':valid')) {
            let nome = campo_nome.val();
            let tipo = campo_tipo.val();
            let descricao = campo_descricao.val();
            let valor = campo_valor.val();


            cadastro_servico(nome, tipo, descricao, valor, get_id())
        }
    });

});