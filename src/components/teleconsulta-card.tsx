import type { Teleconsulta } from "../types/teleconsulta";

interface TeleconsultaCardProps {
  teleconsulta: Teleconsulta;
}

export function TeleconsultaCard({ teleconsulta }: TeleconsultaCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-3/5">
      <h2 className="text-lg font-bold text-blue-600">{teleconsulta.titulo}</h2>
      <p className="text-gray-600">Data: {teleconsulta.data}</p>
      <p className="text-gray-600">Horário: {teleconsulta.hora}</p>
      <p className="text-gray-600">Profissional: {teleconsulta.profissional}</p>
    </div>
  );
}
