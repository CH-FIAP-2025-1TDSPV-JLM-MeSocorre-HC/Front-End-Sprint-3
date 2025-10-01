import { TeleconsultaForm } from "../components/teleconsulta-form";
import type { Teleconsulta } from "../types/teleconsulta";

interface AddTeleconsultaProps {
  teleconsultas: Teleconsulta[];
  onAdd: (teleconsulta: Teleconsulta) => void;
}

export function NovaTeleconsulta({ onAdd }: AddTeleconsultaProps) {
    return (
        <div>
            <h1 className="titulo">Agendar Nova Teleconsulta</h1>

            <TeleconsultaForm onAdd={onAdd}/>
        </div>
    )
}