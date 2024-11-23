// Importa os hooks useState e useEffect do React
import { useState, useEffect } from 'react'
// Importa o CSS de um arquivo
import '../styles/Contador.css'

// Define o componente funcional Contador
function Contador () {
    // Define um estado 'count' inicializado com o valor 0, e uma função 'setCount' para atualizar esse estado
    const [count, setCount] = useState(0)
    
    // Primeiro useEffect simula o método componentDidMount e componentWillUnmount do ciclo de vida do componente de classe
    useEffect(() => {
        // Executado uma vez, logo após o componente ser montado no DOM
        console.log("Componente montado!")

        // Retorna uma função de limpeza que será executada quando o componente for desmontado
        return () => {
            console.log("Componente será desmontado!") // Indica a desmontagem do componente
        }
    }, []) // O array vazio faz com que este efeito execute apenas uma vez

    // Segundo useEffect monitora o estado 'count' e simula o método componentDidUpdate
    useEffect(() => {
        console.log("Componente atualizado!") // Indica que o componente foi atualizado

    }, [count]) // Este efeito será executado sempre que 'count' mudar

    // Função que incrementa o valor de 'count' ao ser chamada
    const increment = () => {
        // Atualiza o estado 'count' adicionando 1 ao valor atual
        setCount(count + 1)
    }

    const decrement = () => {
        //Atualiza o estado 'count' subtraindo 1 ao valor atual
        setCount(count -1)
    }

    const reset = () => {
        //Atualiza o estado 'count' para 0
        setCount(0);
    }

    // Renderiza o conteúdo do componente
    return (
        <div className = "contador">
            {/* Exibe o valor atual de 'count' */}
            <h2> Valor do Contador: {count}</h2>
            <div className = "buttons">
            {/* Botão que, ao ser clicado, chama a função 'increment' para aumentar a contagem */}
            <button onClick={increment}>Incrementar</button>
            {/* Botão que, ao ser clicado, chama a função 'decrement' para diminuir a contagem, deixando inabilitado o botão se o contador for igual a zero */}
            <button onClick={decrement} disabled = {count === 0}>Decrementar</button>
            {/* Botão que, ao ser clicado, chama a função 'reset' para resetar a contagem */}
            <button onClick={reset}>Resetar</button>
            </div>
        </div>
    )
}

// Exporta o componente para que ele possa ser utilizado em outros arquivos
export default Contador