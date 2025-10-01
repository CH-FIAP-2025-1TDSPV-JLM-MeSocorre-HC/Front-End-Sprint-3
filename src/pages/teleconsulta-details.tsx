import { useLocation, useNavigate, useParams } from "react-router-dom";
import type { Teleconsulta } from "../types/teleconsulta";

function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
}

interface TeleconsultaDetailsProps {
  teleconsultas: Teleconsulta[];
}

export function TeleconsultaDetails({ teleconsultas }: TeleconsultaDetailsProps) {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Primeiro tenta pegar pelo state do Link
  let teleconsulta = (location.state as { teleconsulta?: Teleconsulta })?.teleconsulta;

  // Se não veio pelo Link, tenta buscar pelo id nos dados globais
  if (!teleconsulta && id) {
    teleconsulta = teleconsultas.find((t) => t.id === id);
  }

  if (!teleconsulta) {
    return (
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-xl font-bold text-red-600">Teleconsulta não encontrada</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-[#0077c8] text-white rounded px-4 py-2 hover:bg-[#009aa1]"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-center">
        <h1 className="titulo mr-2 font-bold">Teleconsulta -</h1>
        <h1 className="text-2xl font-bold text-[#009aa1] mb-3">{teleconsulta.titulo}</h1>
        <div className="ml-auto">
          <button
            onClick={() => navigate(-1)}
            className="bg-red-600 text-white rounded-lg px-6 py-2 hover:bg-red-700"
          >
            Sair
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-black rounded-t-xl mt-2 text-white  basis-90 justify-center items-center">
        <p>Aguarde {teleconsulta.profissional} entrar na sala.</p>
        <p>Já informamos que você está aqui.</p>
      </div>
      
      <div className="flex flex-col w-full rounded-b-xl shadow px-6 py-4 bg-[#009aa1]">
        

        <div className="text-white space-y-2">
          <p><span className="font-semibold">Data:</span> {formatDate(teleconsulta.data)}</p>
          <p><span className="font-semibold">Profissional:</span> {teleconsulta.profissional}</p>
          <p><span className="font-semibold">Tipo de Consulta:</span> {teleconsulta.titulo}</p>
        </div>
      </div>
      <p className="flex justify-center mt-2">{teleconsulta.id}</p>
    </div>
  );
}
