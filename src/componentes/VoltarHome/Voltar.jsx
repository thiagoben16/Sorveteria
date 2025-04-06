import Link from "next/link";
import estilo from './Voltar.module.css'


export default function VoltarHome(){
    return(
        <div>
            <Link href="/" className={estilo.botao}>Voltar</Link>
        </div>
        
    );
}