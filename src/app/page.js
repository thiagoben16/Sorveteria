import Image from "next/image";
import estilo from "./page.module.css";
import banner from "../../public/banner-home.png";
import sabor from "../../public/banner-sabores.jpg"
import evento from "../../public/eventos-image.jpg"
import sobre from "../../public/banner-sobre.png"
import Voltar from "@/componentes/VoltarHome/Voltar";  

export default function Home() {
  return (    
    <main>   
      <Voltar/>   
      <div className={estilo.container_banner}>
          <Image className={estilo.banner_imagem} src={banner} alt="imagem de um sorvete"></Image>
          <div className={estilo.banner_texto}>
            <h1>Sorvete Artesanal</h1>            
          </div>
      </div>
      <div className={estilo.container_descricao}>
        <div className={estilo.container_sabores}>
          <div className={estilo.container_sabores_principal}>
            <Image className={estilo.sabores_imagem} src={sabor} alt="imagem de sorvetes"></Image>
            <div className={estilo.sabores_texto}>
              <h1>Nossos Sabores</h1>
              <h3>Novos e deliciosos!!</h3>
              <p>Sorvete bom é aquele feito com os melhores ingredientes! 
                Aqui na gelateria todos os nossos produtos são naturais, 
                à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar.
                 Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
              </p>
            </div>
          </div>
        </div> 
        <div className={estilo.container_eventos}>          
          <div className={estilo.container_eventos_principal}>
            <Image className={estilo.eventos_imagem} src={evento} alt="imagem de eventos"></Image>
            <div className={estilo.eventos_texto}>
              <h1>Nossos Eventos</h1>
              <h3>Delicias com sorvete!</h3>
              <p>Sorvete bom é aquele feito com os melhores ingredientes! 
                 Mais do que uma sorveteria, uma extensão da sua casa! 
                 Estamos aqui prontinhos para te atender e oferecer os melhores eventos 
                 com os melhores sorvete da sua vida!
                 Venha nos conhecer e passar um tempo aqui com a gente.
              </p>
            </div>
          </div>
        </div>
        <div className={estilo.container_sabores}>
          <div className={estilo.container_sabores_principal}>
            <Image className={estilo.sabores_imagem} src={sobre} alt="imagem de casquinhas"></Image>
            <div className={estilo.sabores_texto}>
              <h1>SOBRE NÓS</h1>
              <h3>Alegria em cada casquinha!</h3>
              <p>
                 Venha tomar o melhor sorvete da região aqui com a gente! 
                 Nós estamos há anos no mercado produzindo o que tem de melhor para o 
                 nosso cliente e você não pode ficar fora dessa. 
                 Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.

              </p>
            </div>
          </div>
        </div> 
      </div>      
    </main>
  );
}
