import estilo from "./VoltarSobre.module.css"
import Link from "next/link";



export default function VoltarSobre(){
    return(
        <div>
            <Link href="/Sobre" className={estilo.botao}>Voltar</Link>
        </div>
        
    );
}