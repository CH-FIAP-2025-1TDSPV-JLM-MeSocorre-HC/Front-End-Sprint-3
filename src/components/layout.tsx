import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className="min-h-screen bg-white-500">
            
            <nav className="bg-[#f5f5f5]">
                <div className="flex justify-center items-center p-4 gap-x-10">
                    
                    <Link to="/" className="text-gray-600 p-2 rounded-xl hover:text-gray-800 hover:bg-blue-100/30">
                        Home
                    </Link>

                    <Link to="/agendamentos" className="text-gray-600 p-2 rounded-xl hover:text-gray-800 hover:bg-blue-100/30">
                        Agendamentos
                    </Link>
                    <Link to="/notificacoes" className="text-gray-600 p-2 rounded-xl hover:text-gray-800 hover:bg-blue-100/30">
                        Notificações
                    </Link>
                    <Link to="/ajuda" className="text-gray-600 p-2 rounded-xl hover:text-gray-800 hover:bg-blue-100/30">
                        Ajuda
                    </Link>
                    <Link to="/faq" className="text-gray-600 p-2 rounded-xl hover:text-gray-800 hover:bg-blue-100/30">
                        Perguntas Frequentes
                    </Link>
                    <Link to="/quem-somos" className="text-gray-600 p-2 rounded-xl hover:text-gray-800 hover:bg-blue-100/30">
                        Quem Somos
                    </Link>

                </div>
            </nav>
            <main className="flex-1 bg-white p-8">
                <Outlet/>
            </main>
        </div>
    );
}