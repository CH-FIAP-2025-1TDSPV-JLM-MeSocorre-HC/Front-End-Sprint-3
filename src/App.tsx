import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './components/layout';
import { Home } from "./pages/home";
import { Receitas } from "./pages/receitas";
import { QuemSomos } from "./pages/quem-somos";
import { MeusResultados } from "./pages/meus-resultados";
import { NotFound } from "./pages/not-found";
import { Contato } from "./pages/contato";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/meus-resultados" element={<MeusResultados />} />
          <Route path="/receitas" element={<Receitas/>} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
