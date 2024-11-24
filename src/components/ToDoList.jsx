// Importa o hook useState do React para gerenciar o estado do componente
import { useState } from 'react';  
// Importa uma estilização
import '../styles/ToDoList.css';

function ToDo() {  
    // Declara o estado 'tarefas', inicializado como uma lista vazia, para armazenar as tarefas
    const [tarefas, setTarefas] = useState([]);  
    // Declara o estado 'novaTarefa' para capturar o valor da nova tarefa a ser adicionada
    const [novaTarefa, setNovaTarefa] = useState('');  

    // Função para adicionar uma nova tarefa
    const AddTask = () => {  
        if (novaTarefa.trim() === '') {  // Verifica se 'novaTarefa' não está vazia após remover espaços
            return;  // Se estiver vazia, interrompe a função para evitar adicionar uma tarefa vazia
        }

        // Adiciona um objeto com texto e estado de conclusão à lista de 'tarefas'
        setTarefas([...tarefas, { texto: novaTarefa, completa: false }]);  
        setNovaTarefa('');  // Limpa o campo de input após a adição da tarefa
    }

    const RemoveTask = (index) => {  // Define uma função para remover uma tarefa específica
        const updatedTasks = tarefas.filter((_, i) => i !== index);  // Filtra a lista 'tarefas' removendo o item pelo índice fornecido
        setTarefas(updatedTasks);  // Atualiza o estado 'tarefas' com a lista filtrada
    }

    const CompletedTask = (index) => { // Define uma função para concluir uma tarefa
        const newTasks = [...tarefas]; // Copia o array de tarefas
        newTasks[index].completa = !newTasks[index].completa; // Altera o estado da tarefa para completa
        setTarefas(newTasks); // Atualiza o estado das tarefas
    }

    return (  
        <div>
            <h1>Lista de Tarefas</h1>  
            <input 
                type="text"
                value={novaTarefa}  // Define o valor do input como o estado 'novaTarefa'
                onChange={(e) => setNovaTarefa(e.target.value)}  // Atualiza o estado da nova tarefa com o valor do input
                placeholder='Digite uma nova tarefa'  // Define um placeholder para o campo de input
            />
            <button className="add-button" onClick={AddTask}>Adicionar Tarefa</button>  

            <ul>
                {tarefas.map((tarefa, index) => (  // Mapeia o array de tarefas para renderizar a lista de tarefas
                    <li key={index}>
                        <span className={tarefa.completa ? 'completed-task' : ''}>{tarefa.texto}</span>  {/* Aplica uma estilização para as tarefas que forem concluídas */}
                        <button className="remove-button" onClick={() => RemoveTask(index)}>Remover</button>
                        <button className="completed-button" onClick={() => CompletedTask(index)}>Concluir</button>  
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;  // Exporta o componente ToDo para ser usado em outros arquivos