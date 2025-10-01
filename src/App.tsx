import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './components/layout';
import { Home } from "./pages/home";
import { Receitas } from "./pages/receitas";
import { QuemSomos } from "./pages/quem-somos";
import { MeusResultados } from "./pages/meus-resultados";
import { NotFound } from "./pages/not-found";
import { Contato } from "./pages/contato";
import { Sobre } from "./pages/sobre";
import { Teleconsulta } from "./pages/teleconsulta";
import { NovaTeleconsulta } from "./pages/nova-teleconsulta";
import { TeleconsultaDetails } from "./pages/teleconsult-details";
import type { Teleconsulta as TeleconsultaType } from "./types/teleconsulta";
import { useState } from "react";

function App() {

   // estado centralizado com todas as teleconsultas
  const [teleconsultas, setTeleconsultas] = useState<TeleconsultaType[]>([]);

  // função para adicionar uma teleconsulta
  const addTeleconsulta = (nova: TeleconsultaType) => {
    setTeleconsultas((prev) => [...prev, nova]);
  };

  // função para remover uma teleconsulta
  const removeTeleconsulta = (id: string) => {
    setTeleconsultas((prev) => prev.filter((t) => t.id !== id));
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/meus-resultados" element={<MeusResultados />} />
          <Route path="/receitas" element={<Receitas/>} />
          <Route
            path="/teleconsultas"
            element={<Teleconsulta
            teleconsultas={teleconsultas}
            removeTeleconsulta={removeTeleconsulta}
          />} />
          <Route
            path="/teleconsultas/nova-teleconsulta" 
            element={<NovaTeleconsulta 
            teleconsultas={teleconsultas} 
            onAdd={addTeleconsulta}
          />} />
          <Route path="/teleconsultas/:id" element={<TeleconsultaDetails />}/>
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
