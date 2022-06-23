// Modulos

// Modulos arquivos JS que tem a capacidade de exportar e importar informações de outros
// arquivos do mesmo tipo

// Vantagens:

// - Organização do código
// - Compartilhamento de variáveis em escopos diferentes
// - Explicita dependências de arquivos

// Exportar

export function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
};

export function mostraCidade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`
};

export function mostraHobby(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`
};

// Ou 

function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
};

function mostraCidade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`
};

function mostraHobby(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`
};

export{
    mostraCidade,
    mostraIdade,
    mostraHobby
};

// Default exports

// - Só pode haver 1 por arquivo
// - Será o retorno padrão do seu arquivo

export default mostraHobby;