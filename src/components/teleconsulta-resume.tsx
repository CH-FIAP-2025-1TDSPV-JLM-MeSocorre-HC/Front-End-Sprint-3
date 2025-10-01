import { Link } from "react-router-dom";
import type { Teleconsulta } from "../types/teleconsulta";

interface TeleconsultaResumeProps {
  teleconsulta: Teleconsulta;
  removeTeleconsulta: (id: string) => void;
}

function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
}


export function TeleconsultaResume({ teleconsulta, removeTeleconsulta }: TeleconsultaResumeProps) {
  return (
    <div className="flex bg-gray-100 rounded-xl min-h-20 mb-4 w-full">
        <div className="basis-full rounded-s-xl p-4">
            <h2 className="font-bold text-[#009aa1] text-2xl mb-2">{teleconsulta.titulo}</h2>
            <div className="text-gray-600">
                <p className="mb-2">
                    <span className="font-semibold">Data:</span> {formatDate(teleconsulta.data)}
                </p>
                <p className="mb-2">
                    <span className="font-semibold">Horário:</span> {teleconsulta.hora}
                </p>
                <p className="mt-auto">
                    <span className="font-semibold">Profissional:</span> {teleconsulta.profissional}
                </p>
            </div>
        </div>
        <div className="bg-blue-100 p-4 basis-92 rounded-xl flex flex-col items-center justify-center">
            <Link
                to={`/teleconsultas/${teleconsulta.id}`}
                state={{ teleconsulta }}
                className="text-[#0077c8] font-bold hover:underline rounded border border-[#0077c8] px-12 py-2 mb-4"
            >
                Entrar
            </Link>
            <button
                onClick={() => removeTeleconsulta(teleconsulta.id)}
                className="bg-red-600 text-white text-sm rounded-xl py-2 w-38 hover:bg-red-700"
            >
                Cancelar teleconsulta
            </button> 
        </div>
    </div>
    
  );
}
