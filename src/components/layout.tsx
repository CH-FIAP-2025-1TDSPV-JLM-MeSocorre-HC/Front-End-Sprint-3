import { Link, Outlet } from "react-router-dom";
import { FileText, Calendar, Video, FileSearch, Folder, Smile, FileCheck, HelpCircle } from "lucide-react"; 

export function Layout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4 flex flex-col">
        <div className="flex items-center justify-center mb-8">
          <img src="hc-usp.png" alt="Logo" className="h-20" />
        </div>

        <div className="space-y-4">
          <div className="text-gray-700 font-semibold mb-2">Olá, Johnny</div>

          <nav className="flex flex-col space-y-2">
            <Link to="/" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
              <FileText size={20} /> Meus Resultados
            </Link>
            <Link to="/receitas" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
              <FileCheck size={20} /> Minhas Receitas
            </Link>
            <Link to="/agendas" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
              <Calendar size={20} /> Minhas Agendas
            </Link>
            <Link to="/teleconsulta" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
              <Video size={20} /> Teleconsulta
            </Link>
            <Link to="/exames" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
              <FileSearch size={20} /> Solicitação de Exames
            </Link>
            <Link to="/documentos" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
              <Folder size={20} /> Documentos
            </Link>
            <Link to="/pesquisa" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
              <Smile size={20} /> Pesquisa de Satisfação
            </Link>
            <Link to="/termos" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
              <FileCheck size={20} /> Termos de Aceite
            </Link>
            <Link to="/ajuda" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
              <HelpCircle size={20} /> Preciso de Ajuda
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 bg-white p-8">
        <Outlet />
      </main>
    </div>
  );
}
