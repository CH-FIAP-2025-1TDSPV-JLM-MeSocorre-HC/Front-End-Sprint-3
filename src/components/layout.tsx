import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className="flex min-h-screen">
            
            <aside className="w-64 bg-gray-100 p-4 flex flex-col">
                <div className="flex items-center justify-center mb-8">
                    <img src="./public/hc-usp.png" alt="HC-USP" className="h-20" />
                </div>

                <div className="space-y-4">
                    <div className="text-gray-700 font-semibold mb-2">Olá, Johnny</div>

                    <nav className="flex flex-col space-y-2">
                        <Link to="/" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                            Meus Resultados
                        </Link>
                        <Link to="/receitas" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                            Minhas Receitas
                        </Link>
                        <Link to="/agendas" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                            Minhas Agendas
                        </Link>
                        <Link to="/teleconsulta" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                            Teleconsulta
                        </Link>
                        <Link to="/exames" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                        Solicitação de Exames
                        </Link>
                        <Link to="/documentos" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                            Documentos
                        </Link>
                        <Link to="/pesquisa" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                            Pesquisa de Satisfação
                        </Link>
                        <Link to="/termos" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                            Termos de Aceite
                        </Link>
                        <Link to="/ajuda" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                            Preciso de Ajuda
                        </Link>
                    </nav>
                </div>
            </aside>

            <main className="flex-1 bg-white p-8">
                <Outlet/>
            </main>
        </div>
    );
}