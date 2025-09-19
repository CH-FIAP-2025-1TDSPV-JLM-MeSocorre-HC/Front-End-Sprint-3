import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './components/layout';
import { Home } from "./pages/home";
import { Receitas } from "./pages/receitas";
import { QuemSomos } from "./pages/quem-somos";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/receitas" element={<Receitas/>} />
          <Route path="/quem-somos" element={<QuemSomos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
