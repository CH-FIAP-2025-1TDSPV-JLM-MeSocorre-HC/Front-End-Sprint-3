import type { Agendamentos } from "./agendamentos";

export interface AgendamentosProps {
    agendamentos: Agendamentos[];
    removeAgendamentos: (id: string) => void;
}