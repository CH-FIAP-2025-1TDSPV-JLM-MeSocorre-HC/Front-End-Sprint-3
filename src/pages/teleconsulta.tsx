import { Link } from "react-router-dom";
import { TeleconsultaList } from "../components/teleconsulta-list";
import type { Teleconsulta } from "../types/teleconsulta";
import type { TeleconsultaProps } from "../types/teleconsulta-props";

export function Teleconsulta({ teleconsultas, removeTeleconsulta}: TeleconsultaProps) {
    return (
        <div>
            <h1 className="titulo">Teleconsultas</h1>
            <div className="flex flex-col items-center">
                <TeleconsultaList
                    removeTeleconsulta={removeTeleconsulta}
                    teleconsultas={teleconsultas} />
                    
                <Link to="/teleconsultas/nova-teleconsulta" className="bg-[#0077c8] p-2 rounded-lg text-white">
                    Agendar nova teleconsulta
                </Link>
            </div>
        </div>
    )
}