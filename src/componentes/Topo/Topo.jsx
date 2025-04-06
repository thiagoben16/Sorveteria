import Image from "next/image";
import Logo from "../../../public/logo.png";
import estilos from "./Topo.module.css";
import Link from "next/link";

export default function Topo (){
    return (
        <div className={estilos.container_principal}>
            <div className={estilos.container_logo}>
                <Image className={estilos.logo_img} src={Logo} alt="Logo da sorveteria"></Image>
            </div>
            <nav className={estilos.container_navegacao}>
                <Link className={estilos.link_navegacao} href="/">Home</Link>
                <Link className={estilos.link_navegacao} href="/paginaSabores">Sabores</Link>
                <Link className={estilos.link_navegacao} href="/Sobre">Sobre</Link>                
            </nav>
        </div>
    );
}