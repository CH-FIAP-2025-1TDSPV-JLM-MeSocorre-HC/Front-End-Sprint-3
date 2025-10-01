import type { Agendamentos } from "../types/agendamentos";
import { AgendamentosResume } from "./agendamentos-resume";

interface AgendamentosListProps {
  agendamentos: Agendamentos[];
  removeAgendamentos: (id: string) => void;
}

export function AgendamentosList({ agendamentos, removeAgendamentos }: AgendamentosListProps) {
  return (
    <>
      {agendamentos.map((value) => (
        <AgendamentosResume 
          removeAgendamentos={removeAgendamentos} 
          agendamentos={value} 
        />
      ))}
    </>
  );
}
