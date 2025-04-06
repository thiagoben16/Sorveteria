import estilo from "./VoltarSabores.module.css"
import Link from "next/link";



export default function VoltarSabores(){
    return(
        <div>
            <Link href="/paginaSabores" className={estilo.botao}>Voltar</Link>
        </div>
        
    );
}