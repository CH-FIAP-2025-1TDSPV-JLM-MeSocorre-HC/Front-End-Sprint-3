import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className="min-h-screen bg-white-500">
            
            <nav className="bg-gradient-to-r from-teal-500 to-sky-700">
                <div className="flex justify-center items-center p-4 gap-x-10">
                    
                    <Link to="/" className="text-white bg-blue-100/30 p-2 rounded-xl hover:text-gray-100">
                        Home
                    </Link>

                    <Link to="/agendamentos" className="text-white bg-blue-200/30 p-2 rounded-xl hover:text-gray-100">
                        Agendamentos
                    </Link>
                    <Link to="/notificacoes" className="text-white bg-blue-300/30 p-2 rounded-xl hover:text-gray-100">
                        Notificações
                    </Link>
                    <Link to="/ajuda" className="text-white bg-blue-400/30 p-2 rounded-xl hover:text-gray-100">
                        Ajuda
                    </Link>
                    <Link to="/faq" className="text-white bg-blue-500/30 p-2 rounded-xl hover:text-gray-100">
                        Perguntas Frequentes
                    </Link>
                    <Link to="/quem-somos" className="text-white bg-blue-600/30 p-2 rounded-xl hover:text-gray-100">
                        Quem Somos
                    </Link>

                </div>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}