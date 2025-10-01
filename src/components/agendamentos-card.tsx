import type { Agendamentos } from "../types/agendamentos";
interface AgendamentosCardProps {
  agendamento: Agendamentos;
}

export function AgendamentosCard({ agendamento }: AgendamentosCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-3/5">
      <h2>{agendamento.titulo}</h2>
      <p>Data: {agendamento.data}</p>
      <p>Horário: {agendamento.hora}</p>
      <p>Endereço: {agendamento.endereco}</p>
      <p>Profissional: {agendamento.profissional}</p>
    </div>
  );
}
