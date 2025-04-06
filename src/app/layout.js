
import "./globals.css";
import Topo from "@/componentes/Topo/Topo";
import Rodape from "@/componentes/Rodape/Rodape";
import voltar from "@/componentes/VoltarHome/Voltar";
import Voltar from "@/componentes/VoltarHome/Voltar";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topo/>
        {children}        
        <Rodape/>
      </body>
    </html>
  );
}
