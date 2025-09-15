import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div>
            <nav>
                <div>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/agendamentos">
                        Agendamentos
                    </Link>
                    <Link to="/notificacoes">
                        Notificações
                    </Link>
                    <Link to="/ajuda">
                        Ajuda
                    </Link>
                    <Link to="/faq">
                        Perguntas Frequentes
                    </Link>
                    <Link to="/quem-somos">
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