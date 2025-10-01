import { Link } from "react-router-dom";
import { AgendamentosList } from "../components/agendamentos-list";
import type { AgendamentosProps } from "../types/agendamentos-props";

export function Home({ agendamentos, removeAgendamentos}: AgendamentosProps) {
    return (
        <div>
            <h1 className="titulo">Meus Agendamentos</h1>
            <div className="flex flex-col items-center">
                <AgendamentosList
                    removeAgendamentos={removeAgendamentos}
                    agendamentos={agendamentos} />
                    
                <Link to="/agendamentos/novo-agendamento" className="bg-[#0077c8] p-2 rounded-lg text-white">
                    Novo Agendamento
                </Link>
            </div>
        </div>
    )
}