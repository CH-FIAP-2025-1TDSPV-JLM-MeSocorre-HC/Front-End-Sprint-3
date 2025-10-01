import { AgendamentosForm } from "../components/agendamentos-form";
import type { Agendamentos } from "../types/agendamentos";

interface AddAgendamentosProps {
  agendamentos: Agendamentos[];
  onAdd: (Agendamentos: Agendamentos) => void;
}

export function NovoAgendamento({ onAdd }: AddAgendamentosProps) {
    return (
        <div>
            <h1 className="titulo">Novo Agendamento</h1>

            <AgendamentosForm onAdd={onAdd}/>
        </div>
    )
}