import Link from 'next/link'
import styles from '../styles/Botao.module.css'

interface BotaoProps{
    texto: string
    href?: string
    onClick?: (e: any) => void
}


const Botao = (props: BotaoProps) => {
    
    function renderizaBotao(){
        return (
            <button className={styles.botao} onClick={props.onClick}>
                {props.texto}
            </button>
        )
    }
    
    return props.href ? (
        <Link href={props.href}>
            {renderizaBotao()}
        </Link>
    ) : renderizaBotao()
}

export default Botao