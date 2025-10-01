import { useLocation, useNavigate } from "react-router-dom";
import type { Teleconsulta } from "../types/teleconsulta";

function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
}


export function TeleconsultaDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // recupera o objeto teleconsulta enviado pelo Link
  const { teleconsulta } = location.state as { teleconsulta: Teleconsulta };

  if (!teleconsulta) {
    return (
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-xl font-bold text-red-600">Teleconsulta não encontrada</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-3/5 rounded-lg shadow px-6 py-6 bg-white">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          {teleconsulta.titulo}
        </h1>

        <div className="text-gray-600 space-y-2">
          <p><span className="font-semibold">Data:</span> {teleconsulta.data}</p>
          <p><span className="font-semibold">Profissional:</span> {teleconsulta.profissional}</p>
          <p><span className="font-semibold">Data:</span> {formatDate(teleconsulta.data)}</p>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-400 text-white rounded px-4 py-2 hover:bg-gray-500"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
