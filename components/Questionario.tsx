import styles from '../styles/Questionario.module.css'
import QuestaoModel from "../model/questao"
import Questao from "./Questao"
import Botao from './Botao'


interface QuestionarioProps{
    questao: QuestaoModel
    ultimaPergunta: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irPraProximoPasso: () => void
}

const Questionario = (props: QuestionarioProps) => {

    function respostaFornecida(indice: number){
        if(props.questao.naoRespondida){
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }


  return (
    <div className={styles.questionario}>
        {
            props.questao ? 
                <Questao 
                    valor={props.questao}
                    tempoPraResposta={10}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irPraProximoPasso}
                />
            : false
        }
        <Botao onClick={props.irPraProximoPasso} texto={props.ultimaPergunta ? 'Finalizar' : 'Próxima'}/>
    </div>
  )
}

export default Questionario