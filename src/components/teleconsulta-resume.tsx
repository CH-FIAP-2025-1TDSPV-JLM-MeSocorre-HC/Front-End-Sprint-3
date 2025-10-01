import { Link } from "react-router-dom";
import type { Teleconsulta } from "../types/teleconsulta";

interface TeleconsultaResumeProps {
  teleconsulta: Teleconsulta;
  removeTeleconsulta: (id: string) => void;
}

export function TeleconsultaResume({ teleconsulta, removeTeleconsulta }: TeleconsultaResumeProps) {
  return (
    <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 mb-3 bg-white">
      <div className="flex justify-between">
        <h2 className="font-bold text-gray-600">{teleconsulta.titulo}</h2>

        <div className="flex flex-col gap-2 items-center justify-center">
          <Link
            to={`/teleconsulta/${teleconsulta.id}`}
            state={{ teleconsulta }}
            className="text-blue-600 font-bold hover:underline rounded border border-blue-600 p-2"
          >
            detalhes
          </Link>

          <button
            onClick={() => removeTeleconsulta(teleconsulta.id)}
            className="bg-red-600 border text-white rounded p-2"
          >
            Remover treino
          </button>
        </div>
      </div>

      <h3>Data: {teleconsulta.data}</h3>
    </div>
  );
}
