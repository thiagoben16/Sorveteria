import Image from "next/image";
import estilo from "./Rodape.module.css"
import Logo from "../../../public/logo.png";

export default function Rodape(){
    return(
        <footer className={estilo.container_principal}>
            <div className={estilo.rodape_contato}>
                <Image src={Logo} className={estilo.rodape_logo} alt="Imagem logo" ></Image>
                <div className={estilo.rodape_endereco}>
                    <h1>Endereço</h1>
                    <p>Avenida Bernadino de Campos, 98</p>
                    <p>Sao Paulo, SP 12345-678</p>
                </div>
                <div className={estilo.rodape_endereco}>
                    <h1>Contato</h1>
                    <p>info@meusite.com.br</p>
                    <p>tel: (41)9999-56789</p>
                </div>
                <div className={estilo.rodape_endereco}>
                    <h1>Horário</h1>
                    <p>Aberto todos os dias:</p>
                    <p>das 11:00 às 22:00</p>
                </div>
            </div>
            <div className={estilo.rodape_desenvolvedor}>
                    <h1>Desenvolvido por Thiago B Machareth</h1>
            </div>

        </footer>
    );
}