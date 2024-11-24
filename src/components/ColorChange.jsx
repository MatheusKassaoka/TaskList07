// Importa os hooks useState e useEffect do React para gerenciar estado e efeitos colaterais
import { useState, useEffect } from 'react'
// Importa a arquivo CSS para a estilização do componente
import '../styles/ColorChange.css' 

// Cria uma constante para gerar uma cor aleatória em formato hexadecimal, já que as cores alternam dependendo a combinação das letras e números
const getRandomColor = () => {
    // Define os caracteres possíveis para formar uma cor hexadecimal
    const letters = '0123456789ABCDEF'
    let color ='#'
    // Um código de cor hexadecimal é composto por 6 caracteres
    for (let i = 0; i < 6; i++) {
        // Seleciona um índice aleatório do array letters
        // Multiplica por 16 porque o array tem 16 elementos (0 a F)
        // O mathfloor arredonda para baixo, garantindo que seja um número inteiro
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

// Componente principal que alterna a cor do fundo
function ColorChange() {
    // Estado que armazena a cor atual do fundo, inicializado com uma cor aleatória
    const [color, setColor] = useState(getRandomColor())
    // Estado que controla se a alteração de cor está ativa ou não
    const [isChanging, setIsChanging] = useState(false)
    
    // useEffect monitora o estado 'isChanging' e executa efeitos colaterais baseados nisso
    useEffect(() => {
        let interval

        if (isChanging) {
            interval = setInterval(() => { // o 'setInterval' executa a função de gerar e definir uma cor nova a cada 2 segundos (2000ms)
                setColor(getRandomColor()); // Atualiza a cor do estado
            }, 2000)
        }

        // Retorna uma função de limpeza que é executada quando 'isChanging' muda ou o componente desmonta, evitando múltiplos intervalos sendo criados sem serem limpos
        return () => clearInterval(interval)
    }, [isChanging]) // O efeito será executado sempre que 'isChanging' mudar

    return (
        <div className="color-change-container" style={{ backgroundColor: color }}>
            <h1 className="title">Alteração de Cor de Fundo</h1>
            <button
                className="start-button"
                onClick={() => setIsChanging(true)}
                // Aqui desativa o botão caso ele estiver ativo
                disabled={isChanging}>Clique aqui para mudar a cor</button> 
            
            <button
                className="stop-button"
                onClick={() => setIsChanging(false)}
                disabled={!isChanging}>Clique aqui para parar a mudança de cor</button>
        </div>
    );
}

export default ColorChange