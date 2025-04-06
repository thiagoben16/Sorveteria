import estilos from "./paginasabores.module.css";
import Link from "next/link";
import Image from "next/image";
import sorvete1 from "../../../public/sabor-oreo.png";
import sorvete2 from "../../../public/sabor-cookies-avela.png"
import sorvete3 from "../../../public/sabor-pistache.png"
import sorvete4 from "../../../public/sorbet-kiwi.png"
import sorvete5 from "../../../public/sorbet-morango.png"
import sorvete6 from "../../../public/sorbet-limao.png"
import VoltarSabores from "@/componentes/VoltarSabores/VoltarSabores";

export default function Sabores(){
    return (
        <main>
            <VoltarSabores/>
            <section className={estilos.container_banner}>                
                <h1 className={estilos.banner_text}>Nossos Sabores</h1>
            </section>
            <section className={estilos.container_sabores_cards}>
                <h1>Sabores de Sorvete</h1>
                <div className={estilos.container_cards}>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={sorvete1} alt="Sorvete sabor oreo"></Image>
                        <div className={estilos.card_text}>
                            <h3>Sorvete Óreo</h3>
                            <p>Delicioso sorvete saber Óreo. Uma explosão de sabor</p>
                        </div>
                    </div>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={sorvete2} alt="Sorvete sabor Avelã"></Image>
                        <div className={estilos.card_text}>
                            <h3>Sorvete de Avelã</h3>
                            <p>Nossa novidade para esse verão, você vai adorar o sabor</p>
                        </div>
                    </div>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={sorvete3} alt="Sorvete sabor Pistache"></Image>
                        <div className={estilos.card_text}>
                            <h3>Sorvete de Pistache</h3>
                            <p>Cremoso sorvete de sabor pistache com pedacinhos de semente</p>
                        </div>
                    </div>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={sorvete4} alt="Sorvete sabor Kiwi"></Image>
                        <div className={estilos.card_text}>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Um delicioso sorvete sabor Kiwi rico em vitamina C</p>
                        </div>
                    </div>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={sorvete5} alt="Sorvete sabor Morango"></Image>
                        <div className={estilos.card_text}>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet, tradicional e saboroso!</p>
                        </div>
                    </div>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={sorvete6} alt="Sorvete sabor Limão"></Image>
                        <div className={estilos.card_text}>
                            <h3>Sorvete de Limão</h3>
                            <p>O incrivel sorvete de limão vai te encantar!</p>
                        </div>
                    </div>
                </div>
            </section>        

        </main>
    );
}