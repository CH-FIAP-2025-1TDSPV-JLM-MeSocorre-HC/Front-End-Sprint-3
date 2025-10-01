import type { Agendamentos } from "../types/agendamentos";

interface AgendamentosResumeProps {
  agendamentos: Agendamentos;
  removeAgendamentos: (id: string) => void;
}

function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
}


export function AgendamentosResume({ agendamentos }: AgendamentosResumeProps) {
  return (
    <div className="flex bg-gray-100 rounded-xl min-h-20 mb-4 w-full">
        <div className="basis-full rounded-s-xl p-4">
            <h2 className="font-bold text-[#009aa1] text-2xl mb-2">{agendamentos.titulo}</h2>
            <div className="text-gray-600">
                <p className="mt-auto">
                    <span className="font-semibold">Profissional:</span> {agendamentos.profissional}
                </p>
                <p>
                    <span className="font-semibold">Endereço:</span> {agendamentos.endereco}
                </p>
            </div>
        </div>
        <div className="bg-blue-100 p-4 basis-128 rounded-xl flex flex-col items-center justify-center text-gray-600">
             <p className="mb-2">
                <span className="font-semibold text-[#009aa1]">Data:</span> {formatDate(agendamentos.data)}
            </p>
            <p className="mb-2">
                <span className="font-semibold text-[#009aa1]">Horário:</span> {agendamentos.hora}
            </p>
        </div>
    </div>
  );
}
