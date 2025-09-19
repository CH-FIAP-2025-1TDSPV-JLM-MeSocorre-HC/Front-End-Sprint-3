import { Link, Outlet } from "react-router-dom";
import { FileText, Calendar, Video, FileSearch, Folder, Smile, FileCheck, HelpCircle, Users } from "lucide-react";
import "../App.css";

export function Layout() {
  return (
    <div className="flex min-h-screen">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src="hc-usp.png" alt="HC-USP" className="h-20" />
        </div>

        <div>
          <div className="sidebar-user">Olá, Johnny</div>

          <nav className="sidebar-nav">
            <Link to="/" className="sidebar-link">
              <FileText size={20} /> Meus Resultados
            </Link>
            <Link to="/receitas" className="sidebar-link">
              <FileCheck size={20} /> Minhas Receitas
            </Link>
            <Link to="/agendas" className="sidebar-link">
              <Calendar size={20} /> Minhas Agendas
            </Link>
            <Link to="/teleconsulta" className="sidebar-link">
              <Video size={20} /> Teleconsulta
            </Link>
            <Link to="/exames" className="sidebar-link">
              <FileSearch size={20} /> Solicitação de Exames
            </Link>
            <Link to="/documentos" className="sidebar-link">
              <Folder size={20} /> Documentos
            </Link>
            <Link to="/pesquisa" className="sidebar-link">
              <Smile size={20} /> Pesquisa de Satisfação
            </Link>
            <Link to="/termos" className="sidebar-link">
              <FileCheck size={20} /> Termos de Aceite
            </Link>
            <Link to="/ajuda" className="sidebar-link">
              <HelpCircle size={20} /> Preciso de Ajuda
            </Link>
            <Link to="/quem-somos" className="sidebar-link">
              <Users size={20} /> Quem Somos
            </Link>
          </nav>
        </div>
      </aside>


      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
