import { Link, Outlet } from "react-router-dom";
import { FileText, Calendar, Video, FileSearch, Folder, Smile, FileCheck, HelpCircle, Users } from "lucide-react";
import "../App.css";

export function Layout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-72 bg-gray-100 p-4 flex flex-col h-screen overflow-hidden hover:overflow-y-auto transition-all;">
        <div className="flex items-center justify-center mb-8">
          <img src="hc-usp.png" alt="HC-USP" className="h-20" />
        </div>

        <div>
          <div className="text-gray-700 font-semibold mb-2">Olá, Johnny</div>

          <nav className="flex flex-col space-y-2 text-gray-600 hover:text-gray-700">
            <Link to="/" className="sidebar-link" title="Meus Resultados">
              <FileText size={20} /> Meus Resultados
            </Link>
            <Link to="/receitas" className="sidebar-link" title="Minhas Receitas">
              <FileCheck size={20} /> Minhas Receitas
            </Link>
            <Link to="/agendas" className="sidebar-link" title="Minhas Agendas">
              <Calendar size={20} /> Minhas Agendas
            </Link>
            <Link to="/teleconsulta" className="sidebar-link" title="Teleconsulta">
              <Video size={20} /> Teleconsulta
            </Link>
            <Link to="/exames" className="sidebar-link" title="Solicitação de Exames">
              <FileSearch size={20} /> Solicitação de Exames
            </Link>
            <Link to="/documentos" className="sidebar-link" title="Documentos">
              <Folder size={20} /> Documentos
            </Link>
            <Link to="/pesquisa" className="sidebar-link" title="Pesquisa de Satisfação">
              <Smile size={20} /> Pesquisa de Satisfação
            </Link>
            <Link to="/termos" className="sidebar-link" title="Termos de Aceite">
              <FileCheck size={20} /> Termos de Aceite
            </Link>
            <Link to="/ajuda" className="sidebar-link" title="Preciso de Ajuda">
              <HelpCircle size={20} /> Preciso de Ajuda
            </Link>
            <Link to="/quem-somos" className="sidebar-link" title="Quem Somos">
              <Users size={20} /> Quem Somos
            </Link>
          </nav>
        </div>
      </aside>


      <main className="flex-1 bg-gray-100 px-4 pt-8 min-h-10;">
        <section className="bg-white min-h-95/100 p-6 rounded-2xl">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
