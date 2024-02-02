import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="px-5 pt-5">
      <h2 className="text-xl font-bold">Olá, Rodrigo</h2>
      <p className="text-sm">
        {format(new Date(), "EEEE',' dd 'de' MMMM 'de' YYY",{
            locale: ptBR,
      }
      )}</p>
      </div>
    </div>
  );
}
