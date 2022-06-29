const alunos = [
    {
        aluno: 'André',
        nota: 9,
    },
    {
        aluno: "Juliana",
        nota: 10,
    },
    {
        aluno: "Kléber",
        nota: 3,
    }
];

function aprovados(alunos, media){

    let resultado = [];

    for(let i = 0; i < alunos.length; i++){
        let {nota, aluno} = alunos[i];

        if(nota >= media) {
            resultado.push(aluno);
        }
    }

    return resultado;
   
}

console.log(aprovados(alunos, 6));

