let toDoList = [];

// Adicionar uma tarefa
function adicionarTarefa(tarefa) {
    if (!verificarTarefaPorId(tarefa.id)) {
        toDoList.push(tarefa);
        return 'Tarefa cadastrada com sucesso';
    }
    return 'Já existe tarefa com este ID';
}

// Editar uma tarefa salva
function editarTarefa(id,novoTitulo,novaDescricao) {
    let novaTarefa = toDoList.find(tarefa => tarefa.id === id)

    let tarefaEditada = {
        ...novaTarefa,
        titulo: novoTitulo,
        descricao: novaDescricao
    }

    toDoList = toDoList.map(tarefa => tarefa.id === id ? tarefaEditada : tarefa);

    return 'Tarefa editada com sucesso';
}

// Remover uma tarefa salva
function apagarTarefaPorId(id) {
    toDoList = toDoList.filter(tarefa => tarefa.id !== id);
    return 'Tarefa apagada com sucesso';
}

// Listar todas as tarefas salvas
function imprimirTarefas() {
    toDoList.forEach(tarefa => console.log(`Id: ${tarefa.id}, Título: ${tarefa.titulo}, Descrição: ${tarefa.descricao}`));
}

// Obter uma tarefa, através de um parâmetro (id)
function verificarTarefaPorId(id) {
    return toDoList.some(tarefa => tarefa.id === id);
}

// Testes
console.log(adicionarTarefa({id: 1, titulo: 'Aprender React', descricao: 'Criar interfaces de usuários mais interativas e dinâmicas'}));
console.log(adicionarTarefa({id: 1, titulo: 'Aprender React', descricao: 'Criar interfaces de usuários mais interativas e dinâmicas'}));
console.log(adicionarTarefa({id: 2, titulo: 'Dominar o Git', descricao: 'Explorar os comandos'}))
console.log(adicionarTarefa({id: 3, titulo: 'Ler o livro Clean Code', descricao: 'Melhorar as habilidades de codificação e praticar desenvolvimento mais sustentáveis'}))
console.log(adicionarTarefa({id: 4, titulo: 'Revisar projeto', descricao: 'Resolver possíveis problemas e garantir o bom funcionamento'}))
console.log(apagarTarefaPorId(2))
console.log(verificarTarefaPorId(3))
console.log(verificarTarefaPorId(5))

imprimirTarefas()

console.log(editarTarefa(4, 'Estudar JavaScript', 'Aprofundar o conhecimento com mais exercícios e projetos pessoais'))
imprimirTarefas()